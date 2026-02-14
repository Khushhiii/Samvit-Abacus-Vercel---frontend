import React from 'react';
import { CONTACT } from '../constants';

const WhatsAppFloat = () => (
  <a
    href={`${CONTACT.whatsappLink}`}
    className="floating-whatsapp btn btn-gold shadow"
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
  >
    💬 WhatsApp
  </a>
);

export default WhatsAppFloat;
