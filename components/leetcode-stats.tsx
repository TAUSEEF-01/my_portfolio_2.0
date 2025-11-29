"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Target, Flame, Award, TrendingUp, Code2 } from "lucide-react";

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

interface ContestData {
  contestAttend: number;
  contestRating: number;
  contestGlobalRanking: number;
  totalParticipants: number;
  contestTopPercentage: number;
}

export function LeetCodeStats() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [badges, setBadges] = useState<LeetCodeBadge[]>([]);
  const [contest, setContest] = useState<ContestData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const username = "TAUSEEF_01";

  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        setLoading(true);
        
        // Fetch user stats
        const statsResponse = await fetch(
          `https://alfa-leetcode-api.onrender.com/${username}/solved`
        );
        const statsData = await statsResponse.json();

        // Fetch badges
        const badgesResponse = await fetch(
          `https://alfa-leetcode-api.onrender.com/${username}/badges`
        );
        const badgesData = await badgesResponse.json();

        // Fetch contest data
        const contestResponse = await fetch(
          `https://alfa-leetcode-api.onrender.com/${username}/contest`
        );
        const contestData = await contestResponse.json();

        console.log("Stats:", statsData);
        console.log("Badges:", badgesData);
        console.log("Contest:", contestData);

        setStats(statsData);
        setBadges(badgesData.badges || []);
        setContest(contestData);
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
      <section className="py-24 relative overflow-hidden">
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
    return null; // Silently fail if API is down
  }

  const solvedPercentage = stats.totalQuestions > 0 
    ? Math.round((stats.totalSolved / stats.totalQuestions) * 100)
    : 0;

  return (
    <section id="leetcode" className="py-24 relative overflow-hidden">
      {/* Enhanced Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-orange-500/5 to-background" />
      <div className="absolute top-40 left-10 w-[500px] h-[500px] bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-40 right-10 w-[500px] h-[500px] bg-gradient-to-br from-yellow-500/10 to-transparent rounded-full blur-3xl opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-400/5 to-yellow-400/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 mb-6">
            <Code2 className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            <span className="font-semibold text-orange-600 dark:text-orange-400">LeetCode Profile</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
            Competitive Programming Stats
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time statistics from my LeetCode journey
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total Solved */}
            <Card className="group relative border-2 hover:border-orange-500/50 transition-all duration-500 bg-gradient-to-br from-card via-card/95 to-orange-500/5 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-3 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/10 group-hover:scale-110 transition-transform duration-500">
                    <Trophy className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0">
                    {solvedPercentage}%
                  </Badge>
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                  {stats.totalSolved}
                </h3>
                <p className="text-sm font-semibold text-foreground/80">
                  Problems Solved
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  out of {stats.totalQuestions}
                </p>
              </CardContent>
            </Card>

            {/* Contest Rating */}
            {contest && contest.contestRating > 0 && (
              <Card className="group relative border-2 hover:border-amber-500/50 transition-all duration-500 bg-gradient-to-br from-card via-card/95 to-amber-500/5 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-3 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-500/10 group-hover:scale-110 transition-transform duration-500">
                      <TrendingUp className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                    </div>
                    <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-0">
                      Top {contest.contestTopPercentage.toFixed(1)}%
                    </Badge>
                  </div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                    {Math.round(contest.contestRating)}
                  </h3>
                  <p className="text-sm font-semibold text-foreground/80">
                    Contest Rating
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {contest.contestAttend} contests
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Global Ranking */}
            <Card className="group relative border-2 hover:border-green-500/50 transition-all duration-500 bg-gradient-to-br from-card via-card/95 to-green-500/5 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-green-500/20 hover:-translate-y-3 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/10 group-hover:scale-110 transition-transform duration-500">
                    <Target className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                    Global
                  </Badge>
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                  {stats.ranking ? stats.ranking.toLocaleString() : "N/A"}
                </h3>
                <p className="text-sm font-semibold text-foreground/80">
                  Global Ranking
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {stats.reputation || 0} reputation
                </p>
              </CardContent>
            </Card>

            {/* Contribution Points */}
            <Card className="group relative border-2 hover:border-blue-500/50 transition-all duration-500 bg-gradient-to-br from-card via-card/95 to-blue-500/5 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-3 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/10 group-hover:scale-110 transition-transform duration-500">
                    <Flame className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
                    Active
                  </Badge>
                </div>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
                  {stats.contributionPoint || 0}
                </h3>
                <p className="text-sm font-semibold text-foreground/80">
                  Contribution Points
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Community impact
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Problem Breakdown */}
          <Card className="border-2 border-border/50 bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm shadow-xl mb-8 hover:shadow-2xl transition-shadow duration-500">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                Problem Breakdown
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Easy */}
                <div className="space-y-4 p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-foreground">
                      Easy
                    </span>
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-base px-3 py-1">
                      {stats.easySolved}
                    </Badge>
                  </div>
                  <div className="w-full bg-muted/50 rounded-full h-4 overflow-hidden shadow-inner">
                    <div
                      className="bg-gradient-to-r from-green-500 via-green-600 to-emerald-500 h-full rounded-full transition-all duration-1000 shadow-lg"
                      style={{
                        width: `${(stats.easySolved / stats.totalSolved) * 100}%`,
                      }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    {Math.round((stats.easySolved / stats.totalSolved) * 100)}% of total
                  </p>
                </div>

                {/* Medium */}
                <div className="space-y-4 p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-foreground">
                      Medium
                    </span>
                    <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-0 text-base px-3 py-1">
                      {stats.mediumSolved}
                    </Badge>
                  </div>
                  <div className="w-full bg-muted/50 rounded-full h-4 overflow-hidden shadow-inner">
                    <div
                      className="bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 h-full rounded-full transition-all duration-1000 shadow-lg"
                      style={{
                        width: `${(stats.mediumSolved / stats.totalSolved) * 100}%`,
                      }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    {Math.round((stats.mediumSolved / stats.totalSolved) * 100)}% of total
                  </p>
                </div>

                {/* Hard */}
                <div className="space-y-4 p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-foreground">
                      Hard
                    </span>
                    <Badge className="bg-gradient-to-r from-red-500 to-rose-500 text-white border-0 text-base px-3 py-1">
                      {stats.hardSolved}
                    </Badge>
                  </div>
                  <div className="w-full bg-muted/50 rounded-full h-4 overflow-hidden shadow-inner">
                    <div
                      className="bg-gradient-to-r from-red-500 via-red-600 to-rose-500 h-full rounded-full transition-all duration-1000 shadow-lg"
                      style={{
                        width: `${(stats.hardSolved / stats.totalSolved) * 100}%`,
                      }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    {Math.round((stats.hardSolved / stats.totalSolved) * 100)}% of total
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Badges */}
          {badges.length > 0 && (
            <Card className="border-2 border-border/50 bg-gradient-to-br from-card via-card/95 to-card/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-500/10">
                    <Award className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  Earned Badges
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {badges.slice(0, 12).map((badge) => (
                    <div
                      key={badge.id}
                      className="group relative p-5 rounded-2xl bg-gradient-to-br from-muted/50 to-muted/30 border-2 border-border/50 hover:border-amber-500/50 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-1"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                      <div className="relative flex flex-col items-center gap-3">
                        <div className="w-16 h-16 flex items-center justify-center">
                          <img
                            src={badge.icon}
                            alt={badge.displayName}
                            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <p className="text-xs text-center font-semibold line-clamp-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                          {badge.displayName}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {badges.length > 12 && (
                  <div className="text-center mt-6">
                    <Badge variant="outline" className="text-sm px-4 py-2">
                      +{badges.length - 12} more badges
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
