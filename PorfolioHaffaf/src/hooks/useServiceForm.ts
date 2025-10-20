import emailjs from '@emailjs/browser';
import type { FormEvent, RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';

export type UseServiceFormReturn = {
  formRef: RefObject<HTMLFormElement | null>;
  sending: boolean;
  status: null | 'ok' | 'err';
  buttonLabel: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
};

export function useServiceForm(): UseServiceFormReturn {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | 'ok' | 'err'>(null);

  useEffect(() => {
    if (!status) return;
    const t = setTimeout(() => setStatus(null), 3000);
    return () => clearTimeout(t);
  }, [status]);

  const buttonLabel = sending
    ? 'SENDING...'
    : status === 'ok'
      ? 'MESSAGE SENT'
      : status === 'err'
        ? 'ERROR — TRY AGAIN'
        : 'SEND ME A MESSAGE';

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);
    setStatus(null);

    try {
      await emailjs.sendForm('service_slaamrc', 'template_0xf01w4', formRef.current, {
        publicKey: 'yXslOppb68GHyUaMZ',
      });
      setStatus('ok');
      formRef.current.reset();
    } catch (err) {
      console.error('email send error', err);
      setStatus('err');
    } finally {
      setSending(false);
    }
  };

  return {
    formRef,
    sending,
    status,
    buttonLabel,
    onSubmit,
  };
}
