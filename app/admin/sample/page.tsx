"use client";

import React, { useEffect, useState } from "react";
import { BaseLayout } from "../../components/base-layout";
import { BlockCraftTable } from "../../components/table";
import { ISample, useSampleStore } from "../../stores/sample";
import { MRT_ColumnDef } from "material-react-table";
import { Button, Flex, Grid, Text } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation'

const columns: MRT_ColumnDef<ISample>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];

interface IFormInputs {
  search: string;
}

export default function SamplePage() {
  const router = useRouter();
  const { getAllSamples, samples } = useSampleStore();
  const { register, watch } = useForm<IFormInputs>();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (!samples?.length) {
      getAllSamples({});
    }
  }, [samples]);

  useEffect(() => {
    const subscription = watch((value) => setSearchQuery(value.search));
    return () => subscription.unsubscribe();
  }, [watch]);

  const filteredData = samples.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  });

  const onNavigateCreateForm = () => {
    router.push('/admim/sample/form');
  }

  return (
    <BaseLayout>
      <Grid align="center" justify="between" columns="2" gap="5">
        <Flex direction="column">
          <Text size="4" weight="bold">
            List
          </Text>
          <Text color="gray" size="3">
            Samples
          </Text>
        </Flex>

        <Flex direction="row" justify="end">
          <Button size="3" variant="soft" onClick={() => onNavigateCreateForm()}>
            New sample
          </Button>
        </Flex>
      </Grid>
      <Grid align="center" justify="between" columns="1" gap="5" py="5">
        <Flex direction="row" justify="end">
          <form>
            <input
              {...register("search")}
              type="text"
              placeholder="Search..."
              className="flex h-10 w-80 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </form>
        </Flex>
      </Grid>
      <BlockCraftTable columns={columns} data={filteredData} />
    </BaseLayout>
  );
}
export const dynamic = "force-static";
