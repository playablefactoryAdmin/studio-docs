"use client";

import React, { useState, useEffect } from "react";
import { Label } from "./components/ui/label";
import { Checkbox } from "./components/ui/checkbox";

const FloatStorage = () => {
    const [input, setInput] = useState("");
    const [storedFloat, setStoredFloat] = useState(null);

    // Load stored float on component mount
    useEffect(() => {
        const saved = localStorage.getItem("myFloat");
        if (saved !== null) {
            setStoredFloat(parseFloat(saved));
        }
    }, []);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const saveToLocalStorage = () => {
        const floatVal = parseFloat(input);
        if (!isNaN(floatVal)) {
            localStorage.setItem("myFloat", floatVal.toString());
            setStoredFloat(floatVal);
        } else {
            alert("Please enter a valid float number.");
        }
    };

    return (
        <div>
            <h2>Float to LocalStorage</h2>
            <input
                type="text"
                value={input}
                onChange={handleChange}
                placeholder="Enter a float"
            />
            <button onClick={saveToLocalStorage}>Save</button>
            {storedFloat !== null && (
                <p>
                    Stored Float: <strong>{storedFloat}</strong>
                </p>
            )}
        </div>
    );
};

export default function Settings() {
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("animationDisabled");
        if (saved !== null) {
            setIsDisabled(saved === "1");
        }
    }, []);

    const handleChange = (value: boolean) => {
        const strValue = value ? "1" : "0";
        localStorage.setItem("animationDisabled", strValue);
        setIsDisabled(value);
    };

    return (
        <div className="flex flex-col gap-6">
            <Label className="hover:bg-accent/50 flex items-start gap-3 border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 
                dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950 rounded-lg">
                <Checkbox
                    id="toggle-2"
                    checked={isDisabled}
                    onCheckedChange={handleChange}
                    className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                />
                <div className="grid gap-1.5 font-normal">
                    <p className="text-sm leading-none font-medium">
                        Disable Animations
                    </p>
                    <p className="text-muted-foreground text-sm">
                        Disable animations that happen during page load.
                    </p>
                </div>
            </Label>
        </div>
    );
}

