import LatestPost from "@/components/latesPost/latestPost";
import Skeleton from "@/components/loader/skeleton";

import SlayCard from "@/components/slayCard/slayCard";
import TrendingPost from "@/components/trendingPost";
export default function Home() {
  return (
    <section>
      <SlayCard />
      <TrendingPost />
      <LatestPost />
    </section>
  );
}
