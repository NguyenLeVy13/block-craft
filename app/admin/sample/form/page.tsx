"use client";

import { Button, Flex, Grid, Text, TextField } from "@radix-ui/themes";
import { BaseLayout } from "../../../components/base-layout";
import { IPage, usePageStore } from "../../../stores/page";
interface IFormInputs {
  name: string;
  description: string;
  path: string;
}

export default function SampleForm() {
  const { control, handleSubmit } = useForm<IFormInputs>();
  const { addPage } = usePageStore();
  const onsubmit = (data: IFormInputs) => {
    addPage(data);
    router.push("/admin/pages");
  };
  return (
    <BaseLayout>
      <Grid align="center" justify="between" columns="2" gap="5">
        <Flex direction="row" justify="start">
          <Button size="3" variant="soft">
            Back
          </Button>
        </Flex>
      </Grid>
      <Grid align="center" justify="between" columns="2" gap="5">
        <Flex direction="column">
          <Text size="4" weight="bold">
            Create new sample
          </Text>
        </Flex>

        <Flex direction="row" justify="end">
          <Button size="3" variant="soft">
            Save
          </Button>
        </Flex>
      </Grid>
      <Grid align="center" justify="center" gap="5" pt="9">
        <form onSubmit={handleSubmit(onsubmit)} className="w-full">
          <Flex width="100%" direction="row" gap="3">
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <div className="w-full">
                  <Text as="div" size="2" mb="1" weight="bold">
                    Name
                  </Text>
                  <TextField.Input
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="Name"
                  />
                </div>
              )}
              name="name"
            />
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <div className="w-full">
                  <Text as="div" size="2" mb="1" weight="bold">
                    Description
                  </Text>
                  <TextField.Input
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="Description" />
                </div>
              )}
              name="description"
            />
            <Controller
              control={control}
              rules={{
                maxLength: 100,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <div className="w-full">
                  <Text as="div" size="2" mb="1" weight="bold">
                    Path
                  </Text>
                  <TextField.Input
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder="Path" />
                </div>
              )}
              name="path"
            />
          </Flex>
        </form>
      </Grid>
    </BaseLayout>
  );
}
