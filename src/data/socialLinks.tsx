import React, { ReactNode } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram, FaFilePdf, FaBlog } from 'react-icons/fa';
import { SiPeerlist } from 'react-icons/si';

export interface SocialLink {
  name: string;
  url: string;
  icon: ReactNode;
  color: string;
}

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/Ashutoshjhaaa', icon: <FaGithub />, color: '#ffffff' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/ashutoshjhadev', icon: <FaLinkedin />, color: '#0077B5' },
  { name: 'Twitter / X', url: 'https://x.com/ashutoshjhadev', icon: <FaTwitter />, color: '#1DA1F2' },
  { name: 'Email', url: 'mailto:ashujha7070@gmail.com', icon: <FaEnvelope />, color: '#ea4335' },
  { name: 'Peerlist', url: 'https://peerlist.io/ashutoshjha', icon: <SiPeerlist />, color: '#00AA45' },
  { name: 'Instagram', url: 'https://instagram.com/ashutoshjha552', icon: <FaInstagram />, color: '#E4405F' },
  { name: 'Blog', url: 'https://hashnode.com/@ashutoshjha', icon: <FaBlog />, color: '#2962FF' },
  { name: 'Resume', url: 'https://resume.ashutoshjh.me', icon: <FaFilePdf />, color: '#f59e0b' },
];
