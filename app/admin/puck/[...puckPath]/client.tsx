"use client";

import type { Data } from "@measured/puck";
import { Puck } from "@measured/puck";
import config from "@/puck.config";
import { BaseLayout } from "@/app/components/base-layout";
import "./style.scss";

export function Client({ path, data }: { path: string; data: Data }) {
  return (
    <BaseLayout>
      <Puck
        config={config}
        data={data}
        onPublish={async (data: Data) => {
          await fetch("/admin/puck/api", {
            method: "post",
            body: JSON.stringify({ data, path }),
          });
        }}
      />
    </BaseLayout>
  );
}
