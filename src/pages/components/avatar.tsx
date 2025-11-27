import Head from "next/head";
import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarGroup,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";

export default function AvatarPage() {
  return (
    <div className="py-8">
      <Head>
        <title>Avatar — LuckyUI</title>
        <meta name="description" content="Avatar component for LuckyUI - user avatars with image and fallback support." />
      </Head>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold">Avatar</h1>
          <Badge variant="secondary">Data Display</Badge>
        </div>
        <p className="text-[hsl(var(--muted-foreground))] text-lg">
          An image element with a fallback for representing the user.
        </p>
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic Avatar</CardTitle>
              <CardDescription>Avatar with image and fallback.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/characters/dolphina.png" alt="User" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/characters/quacky.png" alt="User" />
                <AvatarFallback>QK</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Avatar Sizes</CardTitle>
              <CardDescription>Different sizes using className.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/characters/sealina.png" alt="Small" />
                <AvatarFallback className="text-xs">SM</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="/characters/sealina.png" alt="Default" />
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
              <Avatar className="h-14 w-14">
                <AvatarImage src="/characters/sealina.png" alt="Large" />
                <AvatarFallback className="text-lg">LG</AvatarFallback>
              </Avatar>
              <Avatar className="h-20 w-20">
                <AvatarImage src="/characters/sealina.png" alt="Extra Large" />
                <AvatarFallback className="text-xl">XL</AvatarFallback>
              </Avatar>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Avatar Group</CardTitle>
              <CardDescription>Stacked avatars with overflow indicator.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <AvatarGroup>
                <Avatar>
                  <AvatarImage src="/characters/dolphina.png" alt="User 1" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/characters/quacky.png" alt="User 2" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/characters/sealina.png" alt="User 3" />
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
              </AvatarGroup>

              <AvatarGroup max={3}>
                <Avatar>
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>B</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>D</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>E</AvatarFallback>
                </Avatar>
              </AvatarGroup>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <Card>
            <CardHeader>
              <CardTitle>Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-sm bg-[hsl(var(--muted))] p-4 rounded-lg overflow-x-auto">
                <code>{`import { Avatar, AvatarFallback, AvatarImage, AvatarGroup } from "@/components/ui";

// Basic avatar
<Avatar>
  <AvatarImage src="/user.jpg" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>

// Custom size
<Avatar className="h-14 w-14">
  <AvatarImage src="/user.jpg" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>

// Avatar group with max
<AvatarGroup max={3}>
  <Avatar>...</Avatar>
  <Avatar>...</Avatar>
  <Avatar>...</Avatar>
  <Avatar>...</Avatar>
</AvatarGroup>`}</code>
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

