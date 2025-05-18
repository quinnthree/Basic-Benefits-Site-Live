import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  link: string
}

export function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  return (
    <Card className="text-center">
      <CardHeader>
        <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
          <div className="w-6 h-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="justify-center">
        <Link href={link}>
          <Button variant="link">Learn more</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
