"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Award } from "lucide-react";

interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  contributionPoint: number;
  reputation: number;
}

interface LeetCodeBadge {
  id: string;
  displayName: string;
  icon: string;
  creationDate: string;
}

export function LeetCodeStats() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [badges, setBadges] = useState<LeetCodeBadge[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const username = "TAUSEEF_01";

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        setLoading(true);
        
        const statsResponse = await fetch(
          `https://alfa-leetcode-api.onrender.com/${username}/solved`
        );
        const statsData = await statsResponse.json();

        const badgesResponse = await fetch(
          `https://alfa-leetcode-api.onrender.com/${username}/badges`
        );
        const badgesData = await badgesResponse.json();

        setStats(statsData);
        setBadges(badgesData.badges || []);
        setError(null);
      } catch (err) {
        console.error("Error fetching LeetCode data:", err);
        setError("Failed to load LeetCode stats");
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeData();
  }, [username]);

  if (loading) {
    return (
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-orange-500/5 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            <p className="mt-4 text-muted-foreground">Loading LeetCode stats...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !stats) {
    return null;
  }

  const solvedPercentage = stats.totalQuestions > 0 
    ? Math.round((stats.totalSolved / stats.totalQuestions) * 100)
    : 0;

  return (
    <section id="leetcode" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-orange-500/5 to-background" />
      <div className="absolute top-40 left-10 w-[500px] h-[500px] bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-40 right-10 w-[500px] h-[500px] bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full blur-3xl opacity-60" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 mb-4">
            <Code2 className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            <span className="font-semibold text-orange-600 dark:text-orange-400">LeetCode Profile</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
            Competitive Programming Stats
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Real-time statistics from my LeetCode journey
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Compact Stats Card */}
          <Card className="border-2 border-border/50 bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <CardContent className="p-6">
              {/* Total Solved Banner */}
              {/* <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Problems Solved</p>
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                      {stats.totalSolved}
                      <span className="text-lg text-muted-foreground ml-2">/ {stats.totalQuestions}</span>
                    </h3>
                  </div>
                  <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 text-lg px-4 py-2">
                    {solvedPercentage}%
                  </Badge>
                </div>
              </div> */}

              <div className="grid lg:grid-cols-2 gap-6">
                {/* Problem Breakdown */}
                <div>
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10">
                      <Code2 className="h-4 w-4 text-primary" />
                    </div>
                    Problem Breakdown
                  </h3>
                  <div className="space-y-3">
                    {/* Easy */}
                    <div className="space-y-2 p-3 rounded-lg bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold">Easy</span>
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-xs">
                          {stats.easySolved}
                        </Badge>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-green-500 to-emerald-500 h-full rounded-full transition-all duration-1000"
                          style={{
                            width: `${(stats.easySolved / stats.totalSolved) * 100}%`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Medium */}
                    <div className="space-y-2 p-3 rounded-lg bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold">Medium</span>
                        <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-0 text-xs">
                          {stats.mediumSolved}
                        </Badge>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-amber-500 to-yellow-500 h-full rounded-full transition-all duration-1000"
                          style={{
                            width: `${(stats.mediumSolved / stats.totalSolved) * 100}%`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Hard */}
                    <div className="space-y-2 p-3 rounded-lg bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold">Hard</span>
                        <Badge className="bg-gradient-to-r from-red-500 to-rose-500 text-white border-0 text-xs">
                          {stats.hardSolved}
                        </Badge>
                      </div>
                      <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-red-500 to-rose-500 h-full rounded-full transition-all duration-1000"
                          style={{
                            width: `${(stats.hardSolved / stats.totalSolved) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Badges */}
                {badges.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-500/10">
                        <Award className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                      </div>
                      Earned Badges
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      {badges.slice(0, 6).map((badge) => (
                        <div
                          key={badge.id}
                          className="group relative p-2 rounded-lg bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 hover:border-amber-500/50 transition-all duration-300 hover:scale-105"
                        >
                          <div className="flex flex-col items-center gap-1">
                            <div className="w-10 h-10 flex items-center justify-center">
                              <img
                                src={badge.icon}
                                alt={badge.displayName}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <p className="text-[9px] text-center font-semibold line-clamp-2">
                              {badge.displayName}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    {badges.length > 6 && (
                      <div className="text-center mt-3">
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          +{badges.length - 6} more
                        </Badge>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
