<script context="module">
let nAriaLabels = 0;
</script>

<script>
import {gotoUrl, currentUrl} from '../store/router';

let className = '';
let classNames = [];
let el;

export {className as class};
export let href = '/';
export let label = '';
export let native = false;
export let replace = false;
export let style = '';

export const focus = () => el.focus();

$: absoluteHref = href.slice(0, 1) == '/' ? currentUrl.base + href : href;
$: ariaLabelledBy = label.length && 'link_label_' + (++nAriaLabels);
$: hasPath = $currentUrl == absoluteHref.replace(/(#|\?).*/, '');

function onClick(event) {
  const href = event.target.closest('a').href;
  return native ? (location.href = href) : gotoUrl(href, {event, replace});
}
</script>

<a href="{absoluteHref}" on:click="{onClick}" class="{className}" class:has-path="{hasPath}" style="{style}" aria-labelledby="{ariaLabelledBy}" bind:this="{el}"><slot/></a>
{#if ariaLabelledBy}
<div role="tooltip" id="{ariaLabelledBy}">{label}</div>
{/if}
