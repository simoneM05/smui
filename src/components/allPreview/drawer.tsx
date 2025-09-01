"use client";

import { Settings, Bell, Palette, User, Shield, Save } from "lucide-react";
import React from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export function DrawerDemo() {
  const [notifications, setNotifications] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(false);
  const [language, setLanguage] = React.useState("it");

  const handleSave = () => {
    // Logica per salvare le impostazioni
    console.log("Impostazioni salvate:", { notifications, darkMode, language });
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size="md" className="gap-2">
          <Settings className="w-4 h-4" />
          Apri Impostazioni
        </Button>
      </DrawerTrigger>

      <DrawerContent className="min-h-[50vh] max-h-[85vh] flex flex-col">
        {/* Header migliorato */}
        <DrawerHeader className="border-b border-border/40 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Settings className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <DrawerTitle className="text-xl font-semibold">
                Impostazioni Rapide
              </DrawerTitle>
              <DrawerDescription className="text-sm text-muted-foreground">
                Personalizza la tua esperienza con queste opzioni
              </DrawerDescription>
            </div>
          </div>
        </DrawerHeader>

        {/* Contenuto scrollabile */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6 max-w-md mx-auto">
            {/* Sezione Notifiche */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Bell className="w-4 h-4 text-blue-600" />
                Notifiche
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border border-border/50">
                <div>
                  <p className="text-sm font-medium">Notifiche Push</p>
                  <p className="text-xs text-muted-foreground">
                    Ricevi aggiornamenti in tempo reale
                  </p>
                </div>
                <Button
                  size="sm"
                  appearance={notifications ? "solid" : "outline"}
                  onClick={() => setNotifications(!notifications)}
                  className="min-w-16"
                >
                  {notifications ? "ON" : "OFF"}
                </Button>
              </div>
            </div>

            {/* Sezione Aspetto */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Palette className="w-4 h-4 text-purple-600" />
                Aspetto
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border border-border/50">
                <div>
                  <p className="text-sm font-medium">Modalità Scura</p>
                  <p className="text-xs text-muted-foreground">
                    Tema scuro per ridurre l&apos;affaticamento degli occhi
                  </p>
                </div>
                <Button
                  size="sm"
                  appearance={darkMode ? "solid" : "outline"}
                  onClick={() => setDarkMode(!darkMode)}
                  className="min-w-16"
                >
                  {darkMode ? "ON" : "OFF"}
                </Button>
              </div>
            </div>

            {/* Sezione Lingua */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium">
                <User className="w-4 h-4 text-green-600" />
                Preferenze
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Lingua</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full p-2 text-sm border border-border rounded-md bg-background"
                >
                  <option value="it">Italiano</option>
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </div>

            {/* Sezione Privacy */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Shield className="w-4 h-4 text-orange-600" />
                Privacy
              </div>
              <div className="p-3 rounded-lg border border-border/50 bg-muted/20">
                <p className="text-sm text-muted-foreground">
                  Le tue impostazioni sono salvate localmente e non vengono
                  condivise con terze parti.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer migliorato */}
        <DrawerFooter className="border-t border-border/40 pt-4">
          <div className="flex flex-col gap-3 max-w-md mx-auto w-full">
            <Button onClick={handleSave} className="gap-2" size="md">
              <Save className="w-4 h-4" />
              Salva Impostazioni
            </Button>

            <div className="flex gap-3">
              <DrawerClose asChild className="flex-1">
                <Button appearance="outline" size="md" className="flex-1">
                  Annulla
                </Button>
              </DrawerClose>

              <DrawerClose asChild className="flex-1">
                <Button appearance="ghost" size="md" className="flex-1">
                  Chiudi
                </Button>
              </DrawerClose>
            </div>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
