import React, { ReactNode } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaFilePdf } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiPeerlist, SiHashnode } from 'react-icons/si';

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
  color: string;
}

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/Ashutoshjhaaa', icon: <FaGithub />, color: '#ffffff' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/ashutoshjhadev', icon: <FaLinkedin />, color: '#0077B5' },
  { name: 'X (Twitter)', url: 'https://x.com/ashutoshjhadev', icon: <FaXTwitter />, color: '#ffffff' },
  { name: 'Email', url: 'mailto:ashujha7070@gmail.com', icon: <FaEnvelope />, color: '#ea4335' },
  { name: 'Peerlist', url: 'https://peerlist.io/ashujha', icon: <SiPeerlist />, color: '#00AA45' },
  { name: 'Hashnode', url: 'https://hashnode.com/@ahutoshjha', icon: <SiHashnode />, color: '#2962FF' },
  { name: 'Instagram', url: 'https://instagram.com/ashutoshjha552', icon: <FaInstagram />, color: '#E4405F' },
  { name: 'Resume', url: '/resume.pdf', icon: <FaFilePdf />, color: '#f59e0b' },
];
