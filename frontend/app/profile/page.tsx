'use client';

import { useRouter } from 'next/navigation';
import { useProfile } from '@/contexts/ProfileContext';
import { useAccount } from 'wagmi';
import { isAuthenticated } from '../user-session';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FortressButton } from '@/components/fortress-button';
import { Shield, Trophy, Zap, Wallet, Twitter, Github, Globe, Edit3, Save, X, Camera, BadgeCheck } from 'lucide-react';

export default function ProfilePage() {
  const { address } = useAccount();
  const { profile, updateProfile } = useProfile();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: profile?.username || '',
    bio: profile?.bio || '',
    avatarUrl: profile?.avatarUrl || '',
    twitter: profile?.socialLinks?.twitter || '',
    github: profile?.socialLinks?.github || '',
    website: profile?.socialLinks?.website || '',
  });
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/');
    }
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateProfile({
      ...formData,
      socialLinks: {
        twitter: formData.twitter,
        github: formData.github,
        website: formData.website,
      },
      walletAddress: address,
    });
    setIsEditing(false);
  };

  if (!isAuthenticated()) return null;

  return (
    <div className="min-h-screen relative pb-20 bg-background pt-24">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar / Stats */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass p-8 rounded-3xl text-center relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 rounded-3xl bg-white/5 border border-white/10 overflow-hidden group">
                    {profile?.avatarUrl ? (
                      <img src={profile.avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl font-bold bg-primary/10 text-primary">
                        {profile?.username?.charAt(0).toUpperCase() || '?'}
                      </div>
                    )}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                    <BadgeCheck className="w-6 h-6" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-1">{profile?.username || 'Anonymous Seeker'}</h2>
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-6">Fortress Acolyte</p>
                
                <div className="flex justify-center gap-4 py-6 border-y border-white/5">
                  <div className="text-center">
                    <p className="text-xl font-bold text-primary">6</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Chambers</p>
                  </div>
                  <div className="w-px h-8 bg-white/5 mt-1" />
                  <div className="text-center">
                    <p className="text-xl font-bold text-primary">4.2k</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">XP</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Wallet className="w-4 h-4" />
                    <span className="font-mono">{address?.slice(0, 6)}...{address?.slice(-4)}</span>
                  </div>
                  <div className="flex justify-center gap-4">
                    {profile?.socialLinks?.twitter && <Twitter className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />}
                    {profile?.socialLinks?.github && <Github className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />}
                    {profile?.socialLinks?.website && <Globe className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass p-6 rounded-3xl"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-primary" />
                Latest Artifacts
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="aspect-square rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary/20" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-8 rounded-3xl min-h-[400px]"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Seeker Identity</h2>
                <FortressButton 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setIsEditing(!isEditing)}
                  className="gap-2"
                >
                  {isEditing ? <><X className="w-4 h-4" /> Cancel</> : <><Edit3 className="w-4 h-4" /> Edit Profile</>}
                </FortressButton>
              </div>

              <AnimatePresence mode="wait">
                {isEditing ? (
                  <motion.form
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Username</label>
                        <input
                          name="username"
                          value={formData.username}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl h-12 px-4 focus:border-primary/50 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Avatar URL</label>
                        <input
                          name="avatarUrl"
                          value={formData.avatarUrl}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl h-12 px-4 focus:border-primary/50 transition-colors"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Bio</label>
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:border-primary/50 transition-colors resize-none"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {['twitter', 'github', 'website'].map(social => (
                        <div key={social} className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">{social}</label>
                          <input
                            name={social}
                            value={(formData as any)[social]}
                            onChange={handleInputChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl h-10 px-4 focus:border-primary/50 transition-colors text-xs"
                          />
                        </div>
                      ))}
                    </div>
                    <FortressButton type="submit" className="w-full h-12 gap-2">
                      <Save className="w-4 h-4" />
                      Save Identity
                    </FortressButton>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-8"
                  >
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-2">Biography</h4>
                      <p className="text-lg font-light leading-relaxed text-foreground/80">
                        {profile?.bio || "This seeker has not yet inscribed their biography into the fortress..."}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-4">Conquered Chambers</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          { title: 'Introduction to Stacks', status: 'Mastered', chamber: 1 },
                          { title: 'Clarity Smart Contracts', status: 'In Progress', chamber: 2 },
                        ].map((ch, i) => (
                          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                              {ch.chamber}
                            </div>
                            <div>
                              <h5 className="text-sm font-bold">{ch.title}</h5>
                              <p className="text-[10px] uppercase tracking-widest text-primary/60">{ch.status}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
