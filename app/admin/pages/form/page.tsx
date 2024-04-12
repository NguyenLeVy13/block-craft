"use client";

import { Button, Flex, Grid, Text, TextField } from "@radix-ui/themes";
import { BaseLayout } from "../../../components/base-layout";

export default function PageForm() {
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
                        Create new page
                    </Text>
                </Flex>

                <Flex direction="row" justify="end">
                    <Button size="3" variant="soft">
                        Save
                    </Button>
                </Flex>
            </Grid>
            <Grid align="center" justify="center" gap="5" pt="9">
                <form className="w-full">
                    <Flex width="100%" direction="row" gap="3">
                        <div className="w-full">
                            <Text as="div" size="2" mb="1" weight="bold">
                                Name
                            </Text>
                            <TextField.Input placeholder="Name" />
                        </div>
                        <div className="w-full">
                            <Text as="div" size="2" mb="1" weight="bold">
                                Description
                            </Text>
                            <TextField.Input placeholder="Description" />
                        </div>
                        <div className="w-full">
                            <Text as="div" size="2" mb="1" weight="bold">
                                Path
                            </Text>
                            <TextField.Input placeholder="Path" />
                        </div>
                    </Flex>
                </form>
            </Grid>
        </BaseLayout>
    );
}
