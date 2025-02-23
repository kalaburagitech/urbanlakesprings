"use client";

import Link from "next/link";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#754E1A] to-[#754E1A] text-white py-10 w-full mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Logo & Intro */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold tracking-wide">🏡 urbanlakesprings</h3>
            <p className="text-sm mt-2">Find your perfect home with us.</p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 border-b border-white pb-1">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "About Us", path: "/about" },
                { name: "Price", path: "/price" },
                { name: "Gallery", path: "/gallery" },
                { name: "Location", path: "/location" }
              ].map((item, index) => (
                <li key={index} className="hover:text-yellow-300 transition duration-300">
                  <Link href={item.path} className="hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (With Modal) */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 border-b border-white pb-1">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="leading-6">
                📍 <span className="text-gray-100">Opposite Avalahalli Lake, Royal Park Residency, JP Nagar 9th Phase, Anjanapura, Bengaluru, Karnataka 560062</span>
              </li>
              
              <Dialog>
                <DialogTrigger className="text-lg font-bold text-black bg-white px-4 py-2 rounded-md inline-block shadow-md hover:bg-yellow-300 transition duration-300">
                  📞 Contact Us
                </DialogTrigger>
                <DialogContent className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold text-gray-800">Get in Touch</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4 space-y-3">
                    <p className="text-gray-600">Feel free to reach out to us for any queries or information.</p>
                    <p className="text-lg font-bold text-gray-700">
                      📞 <a href="tel:+919945264555" className="hover:text-yellow-500">+91 99452 64555</a>
                    </p>
                    <p className="text-lg font-bold text-gray-700">
                      ✉ <a href="mailto:Sales@urbanlakesprings.in" className="hover:text-yellow-500">Sales@urbanlakesprings.in</a>
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </ul>
          </div>

          {/* Social Media (Placeholder for Future) */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold mb-4 border-b border-white pb-1">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {/* Social Media Icons can be added here */}
              <div className="flex justify-center md:justify-start space-x-4">
                
              <div className="flex justify-center md:justify-start space-x-4 mt-4">

              <a href="https://m.facebook.com/profile.php?id=61572437780813&name=xhp_nt__fb__action__open_user"><Image alt="Custom SVG 1" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIHgxPSIzNy4wODEiIHgyPSIxMC45MTgiIHkxPSIxMC45MTgiIHkyPSIzNy4wODEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM2MGFmZmUiLz48c3RvcCBvZmZzZXQ9Ii4wMzMiIHN0b3AtY29sb3I9IiM2YWI0ZmUiLz48c3RvcCBvZmZzZXQ9Ii4xOTciIHN0b3AtY29sb3I9IiM5N2NiZmUiLz48c3RvcCBvZmZzZXQ9Ii4zNjIiIHN0b3AtY29sb3I9IiNiZGRlZmYiLz48c3RvcCBvZmZzZXQ9Ii41MjUiIHN0b3AtY29sb3I9IiNkYWVjZmYiLz48c3RvcCBvZmZzZXQ9Ii42ODciIHN0b3AtY29sb3I9IiNlZWY3ZmYiLz48c3RvcCBvZmZzZXQ9Ii44NDYiIHN0b3AtY29sb3I9IiNmYmZkZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiLz48L2xpbmVhckdyYWRpZW50PjxjaXJjbGUgY3g9IjI0IiBjeT0iMjQiIHI9IjE4LjUiIGZpbGw9InVybCgjU1ZHSURfMV8pIi8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMmU5YmZlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIzIiBkPSJNMzQuNjc4LDM5LjEwOUMzMS42NjEsNDEuMjQ1LDI3Ljk3Nyw0Mi41LDI0LDQyLjVDMTMuNzgzLDQyLjUsNS41LDM0LjIxNyw1LjUsMjQJYzAtMy4wMDksMC43MTgtNS44NDksMS45OTItOC4zNjEiLz48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMyZTliZmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik0xMy45NDEsOC40NzFDMTYuODM2LDYuNTkyLDIwLjI5MSw1LjUsMjQsNS41YzEwLjIxNywwLDE4LjUsOC4yODMsMTguNSwxOC41YzAsMy40LTAuOTE3LDYuNTg3LTIuNTE4LDkuMzI0Ii8+PHBhdGggZmlsbD0iIzJlOWJmZSIgZD0iTTE3LDI5aDR2MTMuMjM1YzAuOTc5LDAuMTYsMS45NzYsMC4yNjUsMywwLjI2NXMyLjAyMS0wLjEwNSwzLTAuMjY1VjI5aDMuNjI1YzAuNTA0LDAsMC45My0wLjM3NiwwLjk5Mi0wLjg3NglsMC4zNzUtM2MwLjAzNi0wLjI4NC0wLjA1My0wLjU3LTAuMjQzLTAuNzg2QzMxLjU2LDI0LjEyMywzMS4yODcsMjQsMzEsMjRoLTR2LTMuNWMwLTEuMTAzLDAuODk3LTIsMi0yaDJjMC41NTIsMCwxLTAuNDQ3LDEtMQl2LTMuMzc1YzAtMC41MTgtMC4zOTYtMC45NS0wLjkxMS0wLjk5NkMzMS4wMywxMy4xMjQsMjkuNjIsMTMsMjcuODM0LDEzQzIzLjQyNywxMywyMSwxNS42MTcsMjEsMjAuMzY4VjI0aC00Yy0wLjU1MiwwLTEsMC40NDctMSwxCXYzQzE2LDI4LjU1MywxNi40NDgsMjksMTcsMjl6Ii8+PC9zdmc+" width={32} height={32}/></a> 

                <Image alt="Custom SVG 2" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIHgxPSIzOC41NzEiIHgyPSI5LjQyOSIgeTE9IjkuNDI5IiB5Mj0iMzguNTcxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmU2MGMxIi8+PHN0b3Agb2Zmc2V0PSIuMDMzIiBzdG9wLWNvbG9yPSIjZmU2YWM1Ii8+PHN0b3Agb2Zmc2V0PSIuMTk3IiBzdG9wLWNvbG9yPSIjZmU5N2Q3Ii8+PHN0b3Agb2Zmc2V0PSIuMzYyIiBzdG9wLWNvbG9yPSIjZmZiZGU1Ii8+PHN0b3Agb2Zmc2V0PSIuNTI1IiBzdG9wLWNvbG9yPSIjZmZkYWYwIi8+PHN0b3Agb2Zmc2V0PSIuNjg3IiBzdG9wLWNvbG9yPSIjZmZlZWY5Ii8+PHN0b3Agb2Zmc2V0PSIuODQ2IiBzdG9wLWNvbG9yPSIjZmZmYmZkIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI1NWR0lEXzFfKSIgZD0iTTE2LjUsNDEuNWgxNWM1LjUyMywwLDEwLTQuNDc3LDEwLTEwdi0xNWMwLTUuNTIzLTQuNDc3LTEwLTEwLTEwaC0xNWMtNS41MjMsMC0xMCw0LjQ3Ny0xMCwxMHYxNQlDNi41LDM3LjAyMywxMC45NzcsNDEuNSwxNi41LDQxLjV6Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmEyYWFiIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIzIiBkPSJNNDEuNSwyMS4wODVWMTYuNWMwLTUuNTIzLTQuNDc4LTEwLTEwLTEwaC0xNWMtNS41MjMsMC0xMCw0LjQ3Ny0xMCwxMHYyLjk4OSIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZhMmFhYiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMyIgZD0iTTYuNSwyNS42MTdWMzEuNWMwLDUuNTIyLDQuNDc3LDEwLDEwLDEwaDE1YzUuNTIyLDAsMTAtNC40NzgsMTAtMTB2LTQuNjA2Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmEyYWFiIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMyIgZD0iTTI0LDE1LjVjLTQuNjk0LDAtOC41LDMuODA2LTguNSw4LjVzMy44MDYsOC41LDguNSw4LjVzOC41LTMuODA2LDguNS04LjVTMjguNjk0LDE1LjUsMjQsMTUuNXoiLz48cGF0aCBmaWxsPSIjZmEyYWFiIiBkPSJNMzQsMTJjLTEuMTA1LDAtMiwwLjg5NS0yLDJzMC44OTUsMiwyLDJzMi0wLjg5NSwyLTJTMzUuMTA1LDEyLDM0LDEyeiIvPjwvc3ZnPg==" width={32} height={32}/>

             <a href="https://wa.me/9945264555" target="_blank" rel="noopener noreferrer"> <Image alt="Custom SVG 2" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIj48bGluZWFyR3JhZGllbnQgaWQ9ImZ6RjVLNzZ1flFQak1JZ0VUdDdiTWEiIHgxPSIzMiIgeDI9IjMyIiB5MT0iNS4yNSIgeTI9IjU4LjgzNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHNwcmVhZE1ldGhvZD0icmVmbGVjdCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMWE2ZGZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzgyMmZmIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI2Z6RjVLNzZ1flFQak1JZ0VUdDdiTWEpIiBkPSJNNi4zOTksNTcuNjk5bDMuNzkyLTEzLjg0N2MtMi4wNzYtMy43NC0zLjE3LTcuOTc1LTMuMTY4LTEyLjI3MiBDNy4wMjgsMTcuNjQxLDE4LjM3Myw2LjMwMSwzMi4zMTIsNi4zMDFjNi43NjIsMC4wMDMsMTMuMTE1LDIuNjM2LDE3Ljg4OSw3LjQxNGM0Ljc3NCw0Ljc3OCw3LjQwMiwxMS4xNTEsNy40LDE3Ljk0NCBDNTcuNTk1LDQ1LjYzMyw0Ni4yNSw1NywzMi4zMTIsNTdjLTQuMDI0LDAtOC4wNzMtMS4wMTktMTEuNzQ0LTIuOTVMNi4zOTksNTcuNjk5eiBNMjAuODI4LDUxLjkxOGwwLjM0NiwwLjE4OCBDMjQuNjQ1LDUzLjk5OSwyOC40OTIsNTUsMzIuMzAyLDU1YzEyLjg0NiwwLDIzLjI5My0xMC40NzEsMjMuMjk5LTIzLjM0MWMwLjAwMi02LjI2LTIuNDE4LTEyLjEzLTYuODE0LTE2LjUzIFMzOC41MzgsOC4zMDQsMzIuMzEyLDguMzAxYy0xMi44MzYsMC0yMy4yODMsMTAuNDQzLTIzLjI4OCwyMy4yNzljLTAuMDAyLDQuMDg5LDEuMDcyLDguMTEzLDMuMTA3LDExLjYzOWwwLjIwOSwwLjM2MUw5LjIzOSw1NC45MDIgTDIwLjgyOCw1MS45MTh6IE0zMi4zMTIsNTNjLTMuNjg2LDAtNy40MTUtMS4wNi0xMC43OTMtMy4wNjNsLTAuNDM3LTAuMzE4bC04Ljg1NCwyLjMyM2wyLjM4Mi04LjY5MWwtMC4yNDQtMC4zODcgYy0yLjEyMy0zLjM3Ni0zLjI0My03LjI3MS0zLjI0MS0xMS4yNjljMC4wMDQtMTEuNjcsOS41MTMtMjEuMTY1LDIxLjE5NS0yMS4xNjVjNS42NDIsMC4wMDIsMTAuOTYxLDIuMjE4LDE0Ljk3OSw2LjIzOSBjNCw0LjAwMyw2LjIwMiw5LjM0NSw2LjIsMTUuMDM5QzUzLjQ5NSw0My40NDgsNDMuOTksNTMsMzIuMzEyLDUzeiBNMjIuNTgzLDQ4LjI0MkMyNS42NDEsNTAuMDQ3LDI5LjAwMSw1MSwzMi4zMDQsNTEgYzEwLjU4NCwwLDE5LjE5MS04LjY1NCwxOS4xOTUtMTkuMjkyYzAuMDAyLTUuMTYxLTEuOTkyLTEwLTUuNjE0LTEzLjYyNWMtMy42NDItMy42NDQtOC40NTktNS42NTEtMTMuNTY1LTUuNjUzIGMtMTAuNTgxLDAtMTkuMTkxLDguNTk4LTE5LjE5NSwxOS4xNjZjLTAuMDAyLDMuNjE5LDEuMDEyLDcuMTQ2LDIuOTMzLDEwLjIwMWwwLjcxNSwxLjEzMWwtMS42OTgsNi4xOTlsNi40MjktMS42ODdMMjIuNTgzLDQ4LjI0MnoiLz48bGluZWFyR3JhZGllbnQgaWQ9ImZ6RjVLNzZ1flFQak1JZ0VUdDdiTWIiIHgxPSIzMi4zMDUiIHgyPSIzMi4zMDUiIHkxPSIxNy41IiB5Mj0iNDYuNTI3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgc3ByZWFkTWV0aG9kPSJyZWZsZWN0Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM2ZGM3ZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNlNmFiZmYiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjZnpGNUs3NnV+UVBqTUlnRVR0N2JNYikiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTI2LjEyLDIxLjIxOWMtMC40NjQtMS4wMzEtMC45NTItMS4wNTItMS4zOTQtMS4wNyBjLTAuMzYxLTAuMDE1LTAuNzc0LTAuMDE1LTEuMTg3LTAuMDE1Yy0wLjQxMywwLTEuMDg0LDAuMTU1LTEuNjUxLDAuNzc1Yy0wLjU2OCwwLjYyLTIuMTY4LDIuMTE4LTIuMTY4LDUuMTY0IGMwLDMuMDQ3LDIuMjE5LDUuOTkxLDIuNTI5LDYuNDA1YzAuMzEsMC40MTMsNC4yODQsNi44NjUsMTAuNTc5LDkuMzQ3YzUuMjMxLDIuMDYzLDYuMjk2LDEuNjUzLDcuNDMxLDEuNTQ5IGMxLjEzNS0wLjEwMywzLjY2NC0xLjQ5OCw0LjE4LTIuOTQ0YzAuNTE2LTEuNDQ2LDAuNTE2LTIuNjg1LDAuMzYxLTIuOTQ0Yy0wLjE1NS0wLjI1OC0wLjU2OC0wLjQxMy0xLjE4Ny0wLjcyMyBjLTAuNjE5LTAuMzEtMy42NjQtMS44MDgtNC4yMzItMi4wMTRjLTAuNTY4LTAuMjA2LTAuOTgxLTAuMzEtMS4zOTQsMC4zMWMtMC40MTMsMC42MTktMS41OTksMi4wMTQtMS45NiwyLjQyNyBjLTAuMzYxLDAuNDE0LTAuNzIzLDAuNDY1LTEuMzQyLDAuMTU2Yy0wLjYxOS0wLjMxMS0yLjYxNC0wLjk2NC00Ljk4LTMuMDc0Yy0xLjg0MS0xLjY0MS0zLjA4NC0zLjY2OC0zLjQ0NS00LjI4OCBjLTAuMzYxLTAuNjE5LTAuMDM5LTAuOTU1LDAuMjcyLTEuMjY0YzAuMjc4LTAuMjc3LDAuNjE5LTAuNzIzLDAuOTI5LTEuMDg1YzAuMzA5LTAuMzYyLDAuNDEyLTAuNjIsMC42MTktMS4wMzMgYzAuMjA2LTAuNDE0LDAuMTAzLTAuNzc1LTAuMDUyLTEuMDg1UzI2LjY3LDIyLjQ0MywyNi4xMiwyMS4yMTl6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=" height={32} width={32}/> </a>

            </div>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 border-t border-white pt-4 text-sm text-center">
          © {new Date().getFullYear()} <span className="font-bold">urbanlakesprings</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
