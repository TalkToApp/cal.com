import { useSession } from "next-auth/react";
import Link from "next/link";

import { useIsEmbed } from "@calcom/embed-core/embed-iframe";
import { APP_NAME, POWERED_BY_URL } from "@calcom/lib/constants";
import { useLocale } from "@calcom/lib/hooks/useLocale";

const PoweredByCal = ({ logoOnly }: { logoOnly?: boolean }) => {
  const { t } = useLocale();
  const session = useSession();
  const isEmbed = useIsEmbed();

  return (
    <div className={"p-2 text-center text-xs sm:text-right" + (isEmbed ? " max-w-3xl" : "")}>
      <Link href={POWERED_BY_URL} target="_blank" className="text-subtle opacity-50 hover:opacity-100">
        {t("powered_by")} {"  "}
        <span className="text-emphasis font-semibold">{APP_NAME}</span>
      </Link>
    </div>
  );
};

export default PoweredByCal;
