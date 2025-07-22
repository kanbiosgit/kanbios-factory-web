// src/app/design-system/page.tsx
'use client'

import {
    Container,
    Section,
    Grid,
    Card,
    Heading,
    Text,
    Label,
    Button,
    Link,
    Badge,
    Chip,
    CheckIcon
} from '@/components/design-system'
import { ArrowRight, Rocket, Users, RefreshCw } from 'lucide-react'

export default function DesignSystemShowcase() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
            <Section spacing="lg">
                <Container size="xl">
                    <Heading as="h1" level="h1" align="center" className="mb-12">
                        Kanbios Factory Design System
                    </Heading>

                    {/* Typography Section */}
                    <div className="mb-16">
                        <Heading level="h2" className="mb-8 pb-4 border-b border-slate-700">
                            Typography
                        </Heading>

                        <Grid cols={2} gap="lg">
                            <Card>
                                <Heading level="h3" className="mb-4">Headings</Heading>
                                <div className="space-y-4">
                                    <Heading as="h1" level="h1">Heading Level 1</Heading>
                                    <Heading as="h2" level="h2">Heading Level 2</Heading>
                                    <Heading as="h3" level="h3">Heading Level 3</Heading>
                                    <Heading as="h4" level="h4">Heading Level 4</Heading>
                                </div>
                            </Card>

                            <Card>
                                <Heading level="h3" className="mb-4">Text Variants</Heading>
                                <div className="space-y-2">
                                    <Text size="xl" weight="bold">Extra Large Bold Text</Text>
                                    <Text size="lg" color="accent">Large Accent Text</Text>
                                    <Text size="base" color="primary">Base Primary Text</Text>
                                    <Text size="sm" color="secondary">Small Secondary Text</Text>
                                    <Text size="xs" color="muted">Extra Small Muted Text</Text>
                                    <Label>Label Component</Label>
                                </div>
                            </Card>
                        </Grid>
                    </div>

                    {/* Buttons Section */}
                    <div className="mb-16">
                        <Heading level="h2" className="mb-8 pb-4 border-b border-slate-700">
                            Buttons
                        </Heading>

                        <Grid cols={2} gap="lg">
                            <Card>
                                <Heading level="h3" className="mb-4">Variants</Heading>
                                <div className="space-y-4">
                                    <Button variant="primary">Primary Button</Button>
                                    <Button variant="secondary">Secondary Button</Button>
                                    <Button variant="ghost">Ghost Button</Button>
                                    <Button variant="link">Link Button</Button>
                                </div>
                            </Card>

                            <Card>
                                <Heading level="h3" className="mb-4">Sizes & States</Heading>
                                <div className="space-y-4">
                                    <Button size="sm">Small Button</Button>
                                    <Button size="md">Medium Button</Button>
                                    <Button size="lg">Large Button</Button>
                                    <Button icon={<ArrowRight className="h-5 w-5" />}>With Icon</Button>
                                    <Button fullWidth>Full Width Button</Button>
                                </div>
                            </Card>
                        </Grid>
                    </div>

                    {/* Links Section */}
                    <div className="mb-16">
                        <Heading level="h2" className="mb-8 pb-4 border-b border-slate-700">
                            Links
                        </Heading>

                        <Card>
                            <div className="space-y-4">
                                <div>
                                    <Link href="#" variant="default">Default Link</Link>
                                </div>
                                <div>
                                    <Link href="#" variant="accent">Accent Link</Link>
                                </div>
                                <div>
                                    <Link href="#" variant="muted">Muted Link</Link>
                                </div>
                                <div>
                                    <Link href="#" showArrow>Link with Arrow</Link>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Cards Section */}
                    <div className="mb-16">
                        <Heading level="h2" className="mb-8 pb-4 border-b border-slate-700">
                            Cards
                        </Heading>

                        <Grid cols={3} gap="md">
                            <Card>
                                <Heading level="h3">Default Card</Heading>
                                <Text color="secondary">This is a default card with standard styling.</Text>
                            </Card>

                            <Card variant="bordered">
                                <Heading level="h3">Bordered Card</Heading>
                                <Text color="secondary">This card has a visible border.</Text>
                            </Card>

                            <Card variant="elevated">
                                <Heading level="h3">Elevated Card</Heading>
                                <Text color="secondary">This card has shadow elevation.</Text>
                            </Card>
                        </Grid>
                    </div>

                    {/* Feedback Components */}
                    <div className="mb-16">
                        <Heading level="h2" className="mb-8 pb-4 border-b border-slate-700">
                            Feedback Components
                        </Heading>

                        <Card>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <Badge>Default Badge</Badge>
                                    <Badge variant="accent">Accent Badge</Badge>
                                    <Badge variant="success">Success Badge</Badge>
                                </div>

                                <div className="flex gap-2">
                                    <Chip>React</Chip>
                                    <Chip>TypeScript</Chip>
                                    <Chip>Next.js</Chip>
                                    <Chip>Tailwind</Chip>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* List with Icons */}
                    <div className="mb-16">
                        <Heading level="h2" className="mb-8 pb-4 border-b border-slate-700">
                            Lists & Icons
                        </Heading>

                        <Card>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <CheckIcon />
                                    <Text as="span">List item with check icon</Text>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon />
                                    <Text as="span">Another validated item</Text>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon />
                                    <Text as="span">Third item in the list</Text>
                                </li>
                            </ul>
                        </Card>
                    </div>

                    {/* Grid System */}
                    <div className="mb-16">
                        <Heading level="h2" className="mb-8 pb-4 border-b border-slate-700">
                            Grid System
                        </Heading>

                        <div className="space-y-8">
                            <div>
                                <Text color="muted" className="mb-4">1 Column</Text>
                                <Grid cols={1} gap="sm">
                                    <Card className="text-center">Column 1</Card>
                                </Grid>
                            </div>

                            <div>
                                <Text color="muted" className="mb-4">2 Columns</Text>
                                <Grid cols={2} gap="sm">
                                    <Card className="text-center">Column 1</Card>
                                    <Card className="text-center">Column 2</Card>
                                </Grid>
                            </div>

                            <div>
                                <Text color="muted" className="mb-4">3 Columns</Text>
                                <Grid cols={3} gap="sm">
                                    <Card className="text-center">Column 1</Card>
                                    <Card className="text-center">Column 2</Card>
                                    <Card className="text-center">Column 3</Card>
                                </Grid>
                            </div>

                            <div>
                                <Text color="muted" className="mb-4">4 Columns</Text>
                                <Grid cols={4} gap="sm">
                                    <Card className="text-center">Col 1</Card>
                                    <Card className="text-center">Col 2</Card>
                                    <Card className="text-center">Col 3</Card>
                                    <Card className="text-center">Col 4</Card>
                                </Grid>
                            </div>
                        </div>
                    </div>

                    {/* Color Palette */}
                    <div className="mb-16">
                        <Heading level="h2" className="mb-8 pb-4 border-b border-slate-700">
                            Color Palette
                        </Heading>

                        <Grid cols={4} gap="md">
                            <Card className="text-center">
                                <div className="w-full h-24 bg-cyan-300 rounded mb-4"></div>
                                <Text size="sm">Cyan 300</Text>
                                <Text size="xs" color="muted">#67e8f9</Text>
                            </Card>

                            <Card className="text-center">
                                <div className="w-full h-24 bg-purple-300 rounded mb-4"></div>
                                <Text size="sm">Purple 300</Text>
                                <Text size="xs" color="muted">#d8b4fe</Text>
                            </Card>

                            <Card className="text-center">
                                <div className="w-full h-24 bg-emerald-300 rounded mb-4"></div>
                                <Text size="sm">Emerald 300</Text>
                                <Text size="xs" color="muted">#6ee7b7</Text>
                            </Card>

                            <Card className="text-center">
                                <div className="w-full h-24 bg-green-400 rounded mb-4"></div>
                                <Text size="sm">Green 400</Text>
                                <Text size="xs" color="muted">#4ade80</Text>
                            </Card>
                        </Grid>
                    </div>

                </Container>
            </Section>
        </main>
    )
}