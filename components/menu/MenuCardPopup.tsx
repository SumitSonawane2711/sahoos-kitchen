"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { theme } from "@/data/site";

// Menu card data structure
type MenuImageType = {
  id: string;
  title: string;
  path: string;
  description?: string;
};

// Breakfast menu images
const breakfastMenus: MenuImageType[] = [
  {
    id: "veg-breakfast",
    title: "Vegetarian Breakfast Menu",
    path: "/menu/veg/breakfast.jpg", // Placeholder - Update with actual path
    description: "Our special vegetarian breakfast options",
  },
  {
    id: "nonveg-breakfast",
    title: "Non-Vegetarian Breakfast Menu",
    path: "/menu/no-veg/breakfast.jpg", // Placeholder - Update with actual path
    description: "Delicious non-vegetarian breakfast specialties",
  },
];

// Weekly combo menu images
const weeklyComboMenus: MenuImageType[] = [
  { id: "monday", title: "Monday Special", path: "/menu/weekly-combo/monday.jpg" },
  { id: "tuesday", title: "Tuesday Special", path: "/menu/weekly-combo/tuesday-nonveg.jpg" },
  { id: "wednesday-veg", title: "Wednesday Veg Special", path: "/menu/weekly-combo/wed-veg.jpg" },
  { id: "wednesday-nonveg", title: "Wednesday Non-Veg Special", path: "/menu/weekly-combo/wed-nonveg.jpg" },
  { id: "thursday", title: "Thursday Special", path: "/menu/weekly-combo/thursday.jpg" },
  { id: "friday", title: "Friday Veg Special", path: "/menu/weekly-combo/friday.jpg" },
  { id: "friday-nonveg", title: "Friday Non-Veg Special", path: "/menu/weekly-combo/friday-nonveg.jpg" },
  { id: "saturday", title: "Saturday Special", path: "/menu/weekly-combo/saturday.jpg" },
  { id: "sunday", title: "Sunday Special", path: "/menu/weekly-combo/sunday.jpg" },
  { id: "sunday-veg", title: "Sunday Veg Special", path: "/menu/weekly-combo/sunday-veg.jpg" },
];

export type MenuCardPopupProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function MenuCardPopup({ open, onOpenChange }: MenuCardPopupProps) {
  const [selectedMenu, setSelectedMenu] = useState<MenuImageType | null>(null);
  const [downloadFormat, setDownloadFormat] = useState<"jpg" | "png" | "pdf">("jpg");
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  // Function to handle download
  const handleDownload = () => {
    if (!selectedMenu) return;
    
    // Get filename from the path
    const fileName = selectedMenu.path.split('/').pop()?.split('.')[0] || 'menu';
    
    if (downloadFormat === "jpg" || downloadFormat === "png") {
      // For image formats, create a link element to download the image
      const link = document.createElement('a');
      
      // Use the original path for jpg, or convert to png path
      const downloadPath = downloadFormat === "jpg" 
        ? selectedMenu.path 
        : selectedMenu.path.replace(/\.jpg$/i, '.png');

      // Some browsers need the link to be on the document
      document.body.appendChild(link);
      link.href = downloadPath;
      link.download = `${fileName}.${downloadFormat}`;
      link.target = '_blank';
      link.click();
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
    } else if (downloadFormat === "pdf") {
      // For PDF, we can use a PDF version from public folder with same name structure
      const pdfPath = selectedMenu.path.replace(/\.(jpg|png)$/i, '.pdf');
      window.open(pdfPath, '_blank');
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 gap-0">
        <div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-background border-b">
          <DialogTitle className="text-xl sm:text-2xl font-bold text-primary">
            Menu Cards
          </DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        </div>
        
        <div className="p-4 sm:p-6">
          <DialogDescription className="mb-6 text-center">
            Browse our menu cards and download them in your preferred format.
          </DialogDescription>
          
          <Tabs defaultValue="breakfast" className="w-full">
            <TabsList className="w-full grid grid-cols-2 mb-6">
              <TabsTrigger value="breakfast" className="text-sm sm:text-base">Breakfast Menu</TabsTrigger>
              <TabsTrigger value="weekly" className="text-sm sm:text-base">Weekly Combo Menu</TabsTrigger>
            </TabsList>
            
            <TabsContent value="breakfast" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {breakfastMenus.map((menu) => (
                  <motion.div
                    key={menu.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md border border-gray-200"
                    onClick={() => setSelectedMenu(menu)}
                  >
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src={menu.path}
                        alt={menu.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button className="bg-secondary text-primary">View Menu</Button>
                      </div>
                    </div>
                    <div className="p-3 bg-white">
                      <h3 className="font-semibold text-primary">{menu.title}</h3>
                      {menu.description && (
                        <p className="text-muted-foreground text-sm">{menu.description}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="weekly" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {weeklyComboMenus.map((menu) => (
                  <motion.div
                    key={menu.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md border border-gray-200"
                    onClick={() => setSelectedMenu(menu)}
                  >
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src={menu.path}
                        alt={menu.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button className="bg-secondary text-primary">View Menu</Button>
                      </div>
                    </div>
                    <div className="p-3 bg-white">
                      <h3 className="font-semibold text-primary text-sm">{menu.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
      
      {/* Menu preview modal */}
      <AnimatePresence>
        {selectedMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedMenu(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[85vh] bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-background border-b">
                <h2 className="text-lg sm:text-xl font-bold text-primary">{selectedMenu.title}</h2>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full"
                  onClick={() => setSelectedMenu(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="relative w-full h-[60vh] overflow-auto">
                <Image
                  src={selectedMenu.path}
                  alt={selectedMenu.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              
              <div className="p-4 border-t bg-background">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      className={downloadFormat === "jpg" ? "bg-secondary/20" : ""}
                      onClick={() => setDownloadFormat("jpg")}
                    >
                      JPG
                    </Button>
                    <Button 
                      variant="outline"
                      className={downloadFormat === "png" ? "bg-secondary/20" : ""}
                      onClick={() => setDownloadFormat("png")}
                    >
                      PNG
                    </Button>
                    <Button 
                      variant="outline"
                      className={downloadFormat === "pdf" ? "bg-secondary/20" : ""}
                      onClick={() => setDownloadFormat("pdf")}
                    >
                      PDF
                    </Button>
                  </div>
                  
                  <Button
                    className="bg-secondary text-primary"
                    onClick={handleDownload}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download {downloadFormat.toUpperCase()}
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Dialog>
  );
} 