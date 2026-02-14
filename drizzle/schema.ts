import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Contact Inquiries table for storing form submissions
export const contactInquiries = mysqlTable("contact_inquiries", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  company: varchar("company", { length: 255 }),
  service: mysqlEnum("service", ["dubai_gruendung", "steuerberatung", "entschuldung", "sonstiges"]).notNull(),
  message: text("message").notNull(),
  source: varchar("source", { length: 100 }), // How did they find us
  status: mysqlEnum("status", ["new", "contacted", "in_progress", "closed"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ContactInquiry = typeof contactInquiries.$inferSelect;
export type InsertContactInquiry = typeof contactInquiries.$inferInsert;

// Booking appointments table for lead tracking
export const bookings = mysqlTable("bookings", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 50 }).notNull(),
  company: varchar("company", { length: 255 }),
  service: mysqlEnum("service", ["dubai_gruendung", "steuerberatung", "entschuldung", "sonstiges"]).notNull(),
  preferredDate: varchar("preferredDate", { length: 50 }).notNull(),
  preferredTime: varchar("preferredTime", { length: 50 }).notNull(),
  alternativeDate: varchar("alternativeDate", { length: 50 }),
  message: text("message"),
  stripePaymentId: varchar("stripePaymentId", { length: 255 }),
  paymentStatus: mysqlEnum("paymentStatus", ["pending", "paid", "refunded"]).default("pending").notNull(),
  bookingStatus: mysqlEnum("bookingStatus", ["new", "confirmed", "completed", "cancelled"]).default("new").notNull(),
  source: varchar("source", { length: 100 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Booking = typeof bookings.$inferSelect;
export type InsertBooking = typeof bookings.$inferInsert;