import { Card } from "./ui/card";
import { ExternalLink } from "lucide-react";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  verificationUrl?: string;
}

const CertificateCard = ({
  title,
  issuer,
  date,
  imageUrl,
  verificationUrl,
}: CertificateCardProps) => {
  return (
    <Card className="group overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {verificationUrl && (
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <a
              href={verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 transition-colors"
            >
              <ExternalLink className="h-6 w-6" />
            </a>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-1">{issuer}</p>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>
    </Card>
  );
};

export default CertificateCard;