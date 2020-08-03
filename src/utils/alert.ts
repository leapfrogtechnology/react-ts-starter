import Alert from '../components/common/alert';

export interface WarningParams {
  title: string;
  text: string;
  buttonText?: string;
  preConfirm?: any;
}

export function warning({ title, text, buttonText, preConfirm }: WarningParams) {
  Alert.fire({
    icon: 'warning',
    title,
    text,
    showCancelButton: true,
    confirmButtonText: buttonText,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    preConfirm,
  });
}
