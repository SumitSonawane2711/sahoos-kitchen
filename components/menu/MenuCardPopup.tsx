"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, X, ZoomIn, ZoomOut, Menu } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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
    id: "main course",
    title: "Main Course Menu",
    path: "/menucard.jpeg", // Placeholder - Update with actual path
    description: "Our special vegetarian breakfast options",
  },
  // {
  //   id: "nonveg-breakfast",
  //   title: "Non-Vegetarian Breakfast Menu",
  //   path: "/menu/no-veg/breakfast.jpg", // Placeholder - Update with actual path
  //   description: "Delicious non-vegetarian breakfast specialties",
  // },
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
  const [activeTab, setActiveTab] = useState("Main Course");
  const [selectedMenu, setSelectedMenu] = useState<MenuImageType>(breakfastMenus[0]);
  const [downloadFormat, setDownloadFormat] = useState<"jpg" | "png" | "pdf">("jpg");
  const [zoomLevel, setZoomLevel] = useState(1);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Reset zoom level when menu changes
    setZoomLevel(1);
  }, [selectedMenu]);
  
  // Function to handle download
  const handleDownload = () => {
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

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleSelectMenu = (menu: MenuImageType) => {
    setSelectedMenu(menu);
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  // Content for menu list to be reused in both desktop and mobile views
  const MenuListContent = () => (
    <Tabs defaultValue="breakfast" onValueChange={setActiveTab} className="w-full">
      <div className="px-4 pt-4">
        <TabsList className="w-full">
          <TabsTrigger value="breakfast" className="flex-1">Main Course</TabsTrigger>
          {/* <TabsTrigger value="weekly" className="flex-1">Weekly Combo</TabsTrigger> */}
        </TabsList>
      </div>

      <TabsContent value="breakfast" className="p-4 space-y-4">
        {breakfastMenus.map((menu) => (
          <div 
            key={menu.id}
            className={`p-4 rounded-lg cursor-pointer hover:bg-gray-100 ${
              selectedMenu.id === menu.id ? 'bg-secondary/20 border border-secondary shadow-sm' : 'border border-gray-200'
            }`}
            onClick={() => handleSelectMenu(menu)}
          >
            <h3 className="font-medium">{menu.title}</h3>
            {menu.description && <p className="text-sm text-gray-500 mt-1">{menu.description}</p>}
          </div>
        ))}
      </TabsContent>

      <TabsContent value="weekly" className="p-4 space-y-4">
        {weeklyComboMenus.map((menu) => (
          <div 
            key={menu.id}
            className={`p-4 rounded-lg cursor-pointer hover:bg-gray-100 ${
              selectedMenu.id === menu.id ? 'bg-secondary/20 border border-secondary shadow-sm' : 'border border-gray-200'
            }`}
            onClick={() => handleSelectMenu(menu)}
          >
            <h3 className="font-medium">{menu.title}</h3>
          </div>
        ))}
      </TabsContent>
    </Tabs>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-7xl p-0 overflow-hidden sm:rounded-lg"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <div className="flex flex-col h-[95vh] sm:h-[90vh]">
          {/* Mobile header */}
          <div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-background border-b">
            <div className="flex items-center gap-2">
              {isMobile && (
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="p-0 w-[80%] sm:w-[400px]">
                    <div className="p-4 border-b">
                      <h2 className="text-lg font-semibold">Menu Selection</h2>
                    </div>
                    <div className="overflow-y-auto h-full">
                      <MenuListContent />
                    </div>
                  </SheetContent>
                </Sheet>
              )}
              <h2 className="text-lg sm:text-xl font-bold text-primary truncate">{selectedMenu.title}</h2>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-8 w-8"
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 0.5}
                >
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <span className="text-sm whitespace-nowrap">{Math.round(zoomLevel * 100)}%</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-8 w-8"
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 3}
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-8 w-8"
                onClick={() => onOpenChange(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-1 overflow-hidden">
            {/* Main content area */}
            <div className="w-full md:w-3/4 relative overflow-auto bg-gray-50">
              <div className="flex justify-center items-center min-h-full pb-16 sm:pb-0">
                <div 
                  style={{ 
                    transform: `scale(${zoomLevel})`,
                    transition: 'transform 0.2s ease'
                  }}
                  className="relative p-4"
                >
                  <Image
                    src={selectedMenu.path}
                    alt={selectedMenu.title}
                    width={800}
                    height={1200}
                    className="object-contain rounded-md shadow-md"
                    priority
                  />
                </div>
              </div>
              
              {/* Mobile zoom controls positioned over the image */}
              {isMobile && (
                <div className="absolute bottom-20 right-4 flex items-center gap-2 bg-white/90 p-2 rounded-full shadow-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full h-8 w-8"
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 0.5}
                  >
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <span className="text-sm">{Math.round(zoomLevel * 100)}%</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full h-8 w-8"
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 3}
                  >
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>

            {/* Desktop sidebar menu */}
            <div className="hidden md:block md:w-1/4 border-l bg-gray-50 overflow-y-auto">
              <MenuListContent />
            </div>
          </div>

          {/* Bottom control bar */}
          <div className="p-4 border-t bg-background sticky bottom-0">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-1 sm:gap-2">
                <Button
                  variant="outline"
                  size={isMobile ? "sm" : "default"}
                  className={`${downloadFormat === "jpg" ? "bg-secondary/20" : ""} px-2 sm:px-3`}
                  onClick={() => setDownloadFormat("jpg")}
                >
                  JPG
                </Button>
                <Button
                  variant="outline"
                  size={isMobile ? "sm" : "default"}
                  className={`${downloadFormat === "png" ? "bg-secondary/20" : ""} px-2 sm:px-3`}
                  onClick={() => setDownloadFormat("png")}
                >
                  PNG
                </Button>
                <Button
                  variant="outline"
                  size={isMobile ? "sm" : "default"}
                  className={`${downloadFormat === "pdf" ? "bg-secondary/20" : ""} px-2 sm:px-3`}
                  onClick={() => setDownloadFormat("pdf")}
                >
                  PDF
                </Button>
              </div>

              <Button
                className="bg-secondary text-primary"
                size={isMobile ? "sm" : "default"}
                onClick={handleDownload}
              >
                <Download className="mr-2 h-4 w-4" />
                Download {downloadFormat.toUpperCase()}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 