'use client';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ToastProviderProps {
  children?: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  return <ToastContainer position="top-right" theme="light" autoClose={500} />;
}
