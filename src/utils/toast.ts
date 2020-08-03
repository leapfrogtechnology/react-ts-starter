import 'izitoast/dist/css/iziToast.css';

import iziToast from 'izitoast';

iziToast.settings({
  timeout: 6000,
  resetOnHover: true,
  progressBar: false,
  transitionIn: 'fadeInUp',
  transitionOut: 'fadeOutDown',
  position: 'bottomCenter',
  displayMode: 0,
});

export function success({ title, message }: { title: string; message: string }) {
  iziToast.success({
    title,
    message,
  });
}

export function error({ title, message }: { title: string; message: string }) {
  iziToast.error({
    title,
    message,
  });
}

export function warning({ title = '', message }: { title: string; message: string }) {
  iziToast.warning({
    title,
    message,
  });
}
