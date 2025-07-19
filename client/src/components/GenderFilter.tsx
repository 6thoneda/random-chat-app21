import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Users, User, Crown } from "lucide-react";

interface GenderFilterProps {
  isPremium: boolean;
  onGenderSelect: (gender: string) => void;
  onUpgrade: () => void;
}

export default function GenderFilter({
  isPremium,
  onGenderSelect,
  onUpgrade,
}: GenderFilterProps) {
  const [selectedGender, setSelectedGender] = useState<string>("any");

  const genderOptions = [
    {
      id: "any",
      label: "Anyone",
      icon: Users,
      description: "Connect with all genders",
      emoji: "👥",
    },
    {
      id: "male",
      label: "Male",
      icon: User,
      description: "Connect with males only",
      emoji: "👨",
    },
    {
      id: "female",
      label: "Female",
      icon: User,
      description: "Connect with females only",
      emoji: "👩",
    },
  ];

  const handleGenderChange = (gender: string) => {
    if (!isPremium && gender !== "any") {
      onUpgrade();
      return;
    }
    setSelectedGender(gender);
    onGenderSelect(gender);
  };

  return (
    <Card className="w-full bg-white/90 backdrop-blur-sm shadow-lg border-rose-200">
      <CardHeader className="pb-2 sm:pb-3 bg-gradient-to-r from-rose-50 to-pink-50 rounded-t-lg px-3 sm:px-6 py-3 sm:py-4">
        <CardTitle className="text-base sm:text-lg flex items-center gap-2 text-rose-700">
          <Users className="h-4 w-4 sm:h-5 sm:w-5" />
          Gender Preference
          {!isPremium && (
            <Crown className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 sm:p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
          {genderOptions.map((option) => {
            const isLocked = !isPremium && option.id !== "any";

            return (
              <Button
                key={option.id}
                variant={selectedGender === option.id ? "default" : "outline"}
                className={`group justify-start h-auto p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  selectedGender === option.id
                    ? "bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-2xl scale-105 border-rose-500 animate-pulse"
                    : "hover:bg-rose-50 border-rose-200 hover:border-rose-400"
                } ${isLocked ? "opacity-60" : ""}`}
                onClick={() => handleGenderChange(option.id)}
              >
                <div className="flex items-center gap-4 w-full">
                  <span className="text-4xl sm:text-5xl group-hover:scale-110 transition-transform duration-200">{option.emoji}</span>
                  <div className="text-left flex-1">
                    <div className="font-bold text-lg">{option.label}</div>
                    <div className="text-sm opacity-75 mt-1">
                      {option.description}
                    </div>
                  </div>
                  {isLocked && <Crown className="h-5 w-5 text-yellow-500 animate-pulse" />}
                  {selectedGender === option.id && (
                    <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                  )}
                </div>
              </Button>
            );
          })}
        </div>

        {!isPremium && (
          <div className="mt-6 p-6 bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 rounded-2xl text-center border-2 border-purple-300 shadow-xl relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200/30 via-pink-200/30 to-rose-200/30 animate-pulse"></div>
            <div className="absolute top-2 right-2 text-2xl animate-bounce">👑</div>
            <div className="absolute bottom-2 left-2 text-xl animate-pulse">✨</div>
            
            <div className="relative z-10">
              <div className="text-3xl mb-3 animate-bounce">🎯</div>
              <p className="text-base text-purple-800 mb-4 font-bold">
                Unlock Gender Filtering with Premium!
              </p>
              <p className="text-sm text-purple-600 mb-4 font-medium">
                Choose exactly who you want to meet and connect with
              </p>
              <Button
                onClick={onUpgrade}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-3 shadow-lg transform hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none font-bold"
              >
                <Crown className="h-5 w-5 mr-2" />
                Upgrade to Premium
                <Sparkles className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
