<script>
import {l} from '../js/i18n';
import {onMount} from 'svelte';
import Icon from '../components/Icon.svelte';
import Link from '../components/Link.svelte';

export let dialog = {};

let linkEl;

$: if (linkEl) linkEl.focus();
</script>

<Link href="{dialog.path}" class="sidebar__header for-settings" bind:this="{linkEl}">
  <h2>{l(dialog.dialog_id ? 'Conversation' : 'Connection')}</h2>
  <Icon name="times-circle"/>
</Link>
