<script>
import Button from '../components/form/Button.svelte';
import Link from '../components/Link.svelte';
import OperationStatus from '../components/OperationStatus.svelte';
import PasswordField from '../components/form/PasswordField.svelte';
import TextField from '../components/form/TextField.svelte';
import {getContext} from 'svelte';
import {redirectAfterLogin} from '../store/router';
import {l, lmd} from '../js/i18n';

const user = getContext('user');
const loginOp = user.api.operation('loginUser');

$: if ($loginOp.is('success')) redirectAfterLogin(user, loginOp);
</script>

<main class="main align-content-middle">
  <h1>{l('Log in')}</h1>
  <form method="post" on:submit|preventDefault="{e => loginOp.perform(e.target)}">
    <TextField name="email" placeholder="{l('Ex: john@doe.com')}" bind:value="{user.formEmail}">
      <span slot="label">{l('E-mail')}</span>
    </TextField>

    <PasswordField name="password">
      <span slot="label">{l('Password')}</span>
    </PasswordField>

    <div class="form-actions">
      <Button icon="sign-in-alt" op="{loginOp}">{l('Log in')}</Button>
    </div>

    <OperationStatus op="{loginOp}"/>
  </form>
  <article>
    <p>{l('Convos is the simplest way to use IRC and it keeps you always online.')}</p>
  </article>
</main>