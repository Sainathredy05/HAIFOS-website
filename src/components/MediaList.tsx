"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MediaList({ activities }: { activities: any[] }) {
  if (activities.length === 0) {
    return (
      <div className="text-center py-20 bg-soft-grey/50 rounded-2xl border border-dashed border-gray-200">
        <p className="text-text-muted">No activities to show right now.</p>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {activities.map((activity) => (
        <motion.div key={activity.id} variants={itemVariants}>
          <Link href={`/media/${activity.id}`} className="card-style group flex flex-col h-full overflow-hidden">
            <div className="h-56 bg-gray-100 relative overflow-hidden">
              {activity.cover_image ? (
                  <img 
                  src={activity.cover_image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-400">
                  No image available
                </div>
              )}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-bold text-primary uppercase tracking-widest shadow-sm">
                {activity.category || 'Initiative'}
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <span className="text-[10px] font-bold text-text-muted mb-3 uppercase tracking-widest">
                {new Date(activity.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                {activity.title}
              </h3>
              <p className="text-text-muted text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                {activity.description}
              </p>
              <div className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                Read More <span>&rarr;</span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

