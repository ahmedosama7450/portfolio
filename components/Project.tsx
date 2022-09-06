export const Project = ({
  title,
  description,
  codeLink,
  previewLink,
}: {
  title: string;
  description: string;
  codeLink: string;
  previewLink?: string;
}) => {
  return (
    <div className="flex-1">
      <div className="font-semibold text-base text-gray-700">{title}</div>
      <div className="text-gray-600 text-sm mt-0.5 leading-relaxed">
        {description}
      </div>
      <div className="flex items-center mt-2.5 gap-3">
        <a
          className="text-gray-800 underline text-sm"
          href={codeLink}
          target="_blank"
          rel="noreferrer"
        >
          Code
        </a>

        {previewLink && (
          <a
            className="text-gray-800 text-sm underline"
            href={previewLink}
            target="_blank"
            rel="noreferrer"
          >
            Preview
          </a>
        )}
      </div>
    </div>
  );
};
