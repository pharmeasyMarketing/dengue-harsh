import React from 'react';
import { Share2, MessageCircle, Instagram, Facebook, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SocialShareBar: React.FC = () => {
  const shareUrl = window.location.href;
  const shareTitle = "Dengue: The Silent Threat of the Monsoon Season - PharmEasy Research";
  const shareText = "Understanding dengue patterns, demographics, and seasonal trends through PharmEasy Lab data and global research insights.";

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent(`${shareTitle}\n\n${shareText}\n\n${shareUrl}`)}`,
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'bg-blue-700 hover:bg-blue-800'
    },
    {
      name: 'Reddit',
      icon: Share2,
      url: `https://reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`,
      color: 'bg-orange-500 hover:bg-orange-600'
    },
    {
      name: 'Telegram',
      icon: Send,
      url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      color: 'bg-blue-500 hover:bg-blue-600'
    }
  ];

  const handleShare = (url: string) => {
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="share-bar hidden lg:flex">
      {shareLinks.map((link) => (
        <Button
          key={link.name}
          onClick={() => handleShare(link.url)}
          className={`w-10 h-10 p-0 ${link.color} text-white`}
          title={`Share on ${link.name}`}
        >
          <link.icon className="h-4 w-4" />
        </Button>
      ))}
    </div>
  );
};