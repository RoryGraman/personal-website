import Image from "next/image"
import { GithubIcon, InstagramIcon, TwitterIcon } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import RetroLink from "@/components/retro-link"

export default function PersonalSitePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-amber-100 p-4 font-mono">
      <Card className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-amber-50 border-2 border-stone-700 shadow-[8px_8px_0px_#44403c] rounded-none">
        <CardHeader className="border-b-2 border-stone-700 p-4 md:p-6">
          <div className="flex flex-col items-center space-y-3">
            <Image
              src="/headshot.png"
              alt="Rory Graman"
              width={100}
              height={100}
              className="rounded-full border-2 border-stone-700"
            />
            <h1 className="text-2xl sm:text-3xl font-semibold text-stone-800">Rory Graman</h1>
          </div>
        </CardHeader>
        <CardContent className="p-4 md:p-6">
          <p className="text-stone-700 text-center leading-relaxed text-sm sm:text-base">
            Hello! I&apos;m Rory Graman, a Product Manager based in the south suburbs of Chicago. I enjoy camping, lifting, and exploring the latest in AI. This is my little corner of the internet!
          </p>

          {/* Social Links Section */}
          <div className="mt-6 md:mt-8">
            <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-3 md:justify-center">
              <RetroLink
                href="https://github.com/rorygraman"
                icon={<GithubIcon size={20} className="text-stone-700 group-hover:text-emerald-800" />}
                label="GitHub"
                className="flex-1 md:flex-none"
              />
              <RetroLink
                href="https://www.instagram.com/fit.rory/"
                icon={<InstagramIcon size={20} className="text-stone-700 group-hover:text-emerald-800" />}
                label="Instagram"
                className="flex-1 md:flex-none"
              />
              <RetroLink
                href="https://x.com/rorygraman"
                icon={<TwitterIcon size={20} className="text-stone-700 group-hover:text-emerald-800" />}
                label="X / Twitter"
                className="flex-1 md:flex-none"
              />
            </div>
          </div>

          <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t-2 border-dashed border-stone-400 text-center">
            <p className="text-sm text-stone-600">&copy; {new Date().getFullYear()} Rory Graman. All rights reserved.</p>
            <p className="text-xs text-stone-500 mt-1">Powered by Retro Vibes &trade;</p>
            <p className="text-xs text-stone-500 mt-2">
              This website is hosted on a 2014 Mac Mini running Debian and is served using Cloudflare Tunneling.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
