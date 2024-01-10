import { useTranslation } from "react-i18next";

export default function SupportButton() {
  const { t } = useTranslation();
  return (
    <div className="flex items-center text-base">
      <a className="hover:text-gray-600" href={t("supportButton.link")}>
        {t("supportButton.title")}
      </a>
    </div>
  );
}
