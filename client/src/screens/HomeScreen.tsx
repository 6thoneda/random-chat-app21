import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BottomNavBar from '../components/BottomNavBar';
import { Button } from '../components/ui/button';
import { Video, Users, Heart, Star, Crown, Zap } from 'lucide-react';
import { usePremium } from '../context/PremiumProvider';
import { useCoin } from '../context/CoinProvider';
import { useLanguage } from '../context/LanguageProvider';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const { isPremium } = usePremium();
  const { coins } = useCoin();
  const { t } = useLanguage();

  const handleStartChat = () => {
    navigate('/video-chat', { state: { isSearching: true } });
  };

  const handleVoiceChat = () => {
    if (isPremium) {
      navigate('/video-chat', { state: { voiceOnly: true, isSearching: true } });
    } else {
      navigate('/voice');
    }
  };

  return (
    <>
      <Helmet>
        <title>{t('app.name')} - Home</title>
      </Helmet>
      
      <main className="flex flex-col items-center min-h-screen w-full max-w-md mx-auto bg-gradient-to-br from-primary-50 via-accent-25 to-gold-50 px-2 py-4 relative pb-20">
        {/* Enhanced Header */}
        <div className="w-full flex items-center justify-between p-6 bg-gradient-to-r from-primary-500 via-accent-500 to-premium-600 text-white font-bold text-xl rounded-t-2xl shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          
          <div className="relative z-10 flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <Video className="h-8 w-8 text-white/90" />
              <h1 className="text-2xl font-bold tracking-tight text-white">{t('app.name')}</h1>
            </div>
            
            <div className="flex items-center gap-2 bg-gradient-to-r from-gold-400 to-secondary-500 rounded-full px-4 py-2 shadow-lg">
              <Crown className="h-5 w-5 text-white" />
              <span className="font-bold text-white">{coins}</span>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col bg-white/90 backdrop-blur-sm rounded-b-2xl border border-primary-100 shadow-2xl mb-6 overflow-hidden">
          {/* Hero Section */}
          <div className="p-6 text-center bg-gradient-to-br from-primary-50 to-accent-50">
            <div className="text-6xl mb-4 animate-bounce">💕</div>
            <h2 className="text-2xl font-bold text-primary-700 mb-2">{t('app.tagline')}</h2>
            <p className="text-primary-600 mb-6">
              Connect with amazing people worldwide through video chat
            </p>
            
            {/* Main Action Button */}
            <Button
              onClick={handleStartChat}
              className="w-full py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-primary-500 to-accent-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-4"
            >
              <Video className="h-6 w-6 mr-3" />
              {t('home.start')}
            </Button>
            
            {/* Voice Chat Button */}
            <Button
              onClick={handleVoiceChat}
              variant="outline"
              className="w-full py-3 text-base font-semibold rounded-xl border-2 border-primary-300 text-primary-700 hover:bg-primary-50"
            >
              <Zap className="h-5 w-5 mr-2" />
              Voice Only Chat
              {!isPremium && <Crown className="h-4 w-4 ml-2 text-gold-500" />}
            </Button>
          </div>

          {/* Features Grid */}
          <div className="p-6 space-y-4">
            <h3 className="font-bold text-primary-800 text-lg text-center mb-4">Why Choose AjnabiCam?</h3>
            
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center bg-gradient-to-r from-primary-50 to-accent-50 p-4 rounded-xl border border-primary-200">
                <div className="bg-primary-500 p-3 rounded-full mr-4">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-700">{t('home.features.hd')}</h4>
                  <p className="text-sm text-primary-600">Crystal clear video quality</p>
                </div>
              </div>
              
              <div className="flex items-center bg-gradient-to-r from-accent-50 to-secondary-50 p-4 rounded-xl border border-accent-200">
                <div className="bg-accent-500 p-3 rounded-full mr-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-accent-700">{t('home.features.secure')}</h4>
                  <p className="text-sm text-accent-600">Your privacy is protected</p>
                </div>
              </div>
              
              <div className="flex items-center bg-gradient-to-r from-secondary-50 to-premium-50 p-4 rounded-xl border border-secondary-200">
                <div className="bg-secondary-500 p-3 rounded-full mr-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-700">{t('home.features.instant')}</h4>
                  <p className="text-sm text-secondary-600">Connect in seconds</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={() => navigate('/friends')}
                variant="outline"
                className="flex flex-col items-center p-4 h-auto border-primary-200 hover:bg-primary-50"
              >
                <Users className="h-6 w-6 text-primary-600 mb-2" />
                <span className="text-sm font-semibold text-primary-700">Friends</span>
              </Button>
              
              <Button
                onClick={() => navigate('/profile')}
                variant="outline"
                className="flex flex-col items-center p-4 h-auto border-primary-200 hover:bg-primary-50"
              >
                <Star className="h-6 w-6 text-primary-600 mb-2" />
                <span className="text-sm font-semibold text-primary-700">Profile</span>
              </Button>
            </div>
          </div>
        </div>

        <BottomNavBar />
      </main>
    </>
  );
};

export default HomeScreen;
