import Image from "next/image";
import Link from "next/link";

export default function ExtensionCard({
  icon,
  name,
  description,
  benefits,
  link,
}) {
  return (
    <div className="bg-[#28324E] text-gray-200 p-6 max-w-md w-full mx-auto border border-[#3A4A60] rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 group hover:scale-105 hover:bg-gradient-to-r hover:from-[#2A4958] group-hover:to-[#3DB8A3] flex flex-col space-y-4 h-full">
      {/* Icon and Title */}
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 flex-shrink-0">
          <Image
            src={icon}
            alt={`${name} icon`}
            width={64}
            height={64}
            className="rounded-lg"
          />
        </div>
        <h2 className="text-2xl font-semibold text-[#61EBCE]">{name}</h2>
      </div>

      {/* Description and Benefits */}
      <div className="flex-grow">
        <p className="text-gray-300 font-light leading-relaxed">
          {description}
        </p>
        <div className="text-gray-400 font-light leading-relaxed space-y-2 mt-4">
          {typeof benefits === "string" ? <p>{benefits}</p> : benefits}
        </div>
      </div>

      {/* Get Extension Button */}
      {link && (
        <div className="flex justify-center mt-4">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full max-w-xs px-4 py-2 bg-[#61EBCE] text-[#1A3B61] font-medium rounded-lg shadow hover:bg-[#45c7ab] transition duration-300 text-center"
          >
            Get Extension
          </Link>
        </div>
      )}
    </div>
  );
}
