CREATE TABLE `bookings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(50) NOT NULL,
	`company` varchar(255),
	`service` enum('dubai_gruendung','steuerberatung','entschuldung','sonstiges') NOT NULL,
	`preferredDate` varchar(50) NOT NULL,
	`preferredTime` varchar(50) NOT NULL,
	`alternativeDate` varchar(50),
	`message` text,
	`stripePaymentId` varchar(255),
	`paymentStatus` enum('pending','paid','refunded') NOT NULL DEFAULT 'pending',
	`bookingStatus` enum('new','confirmed','completed','cancelled') NOT NULL DEFAULT 'new',
	`source` varchar(100),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `bookings_id` PRIMARY KEY(`id`)
);
