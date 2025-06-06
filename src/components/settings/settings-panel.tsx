import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { ApiKeyField } from "@/components/settings/api-key-field";
import { FloatingButtonField } from "@/components/settings/floating-button-field";
import { FrameworkField } from "@/components/settings/framework-field";
import { Loader2 } from "lucide-react";

export interface SettingsPanel {
  container?: HTMLElement | null;
}

export const SettingsPanel = ({ container }: SettingsPanel) => {
  const [isSaving, setIsSaving] = useState(false);

  const handleSavingStateChange = (saving: boolean) => {
    setIsSaving(saving);
  };

  return (
    <div className="grid gap-4">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h4 className="leading-none font-bold">Settings</h4>
          <div className="flex items-center gap-2">
            {isSaving && <Loader2 className="h-4 w-4 text-primary animate-spin" />}
            <ThemeToggle />
          </div>
        </div>
      </div>
      <div className="grid gap-2">
        <ApiKeyField onSavingStateChange={handleSavingStateChange} />
        <FloatingButtonField onSavingStateChange={handleSavingStateChange} />
        <FrameworkField container={container} onSavingStateChange={handleSavingStateChange} />
      </div>
    </div>
  );
};
