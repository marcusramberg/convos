(function() {
  Convos.mixin.autocomplete = {
    props: ["options", "value"],
    computed: {
      filteredOptions: function() {
        return this.options;
      },
      labelActive: function() {
        return this.value || this.placeholder || this.hasFocus;
      }
    },
    data: function() {
      return {
        hasFocus: false,
        selected: -1,
        selectStart: 0
      };
    },
    methods: {
      keydown: function(e) {
        switch (e.keyCode) {
          case 38: // up
          case 40: // down
            e.preventDefault();
        }
      },
      keyup: function(e) {
        switch (e.keyCode) {
          case 13: // enter
            if (this.selected >= 0 && this.filteredOptions[this.selected]) {
              this.select(this.filteredOptions[this.selected]);
            }
            else if (this.value.length) {
              this.select({value: this.value});
            }
            break;
          case 38: // up
            if (--this.selected < this.selectStart) this.selected = this.filteredOptions.length - 1;
            this.scrollIntoView();
            break;
          case 40: // down
            if (++this.selected >= this.filteredOptions.length) this.selected = 0;
            this.scrollIntoView();
            break;
          default:
            if (!this.value) this.selected = this.selectStart;
        }
      },
      optionClass: function(i) {
        return {active: i == this.selected ? true : false, link: true};
      },
      scrollIntoView: function() {
        var i = this.selected < 0 ? 0 : this.selected;
        var li = this.$el.querySelectorAll("li")[this.selected];
        if (li) this.$el.querySelector(".autocomplete").scrollTop = li.offsetTop;
      },
      select: function(option) {
        this.$emit("select", option);
      }
    }
  };
})();
