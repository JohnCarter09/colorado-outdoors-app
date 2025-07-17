-- CreateTable
CREATE TABLE "trout_stocking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "location" TEXT NOT NULL,
    "waterBody" TEXT NOT NULL,
    "county" TEXT,
    "species" TEXT NOT NULL,
    "size" TEXT,
    "quantity" INTEGER NOT NULL,
    "stockingDate" DATETIME NOT NULL,
    "nextStockingDate" DATETIME,
    "latitude" REAL,
    "longitude" REAL,
    "waterBodyType" TEXT,
    "accessInfo" TEXT,
    "regulations" TEXT,
    "source" TEXT NOT NULL DEFAULT 'cpw-website',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "water_conditions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "waterBody" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "lastUpdated" DATETIME NOT NULL,
    "waterLevel" TEXT NOT NULL,
    "waterTemperature" REAL,
    "clarity" TEXT NOT NULL,
    "flow" TEXT NOT NULL,
    "fishingConditions" TEXT NOT NULL,
    "notes" TEXT,
    "weatherImpact" TEXT,
    "source" TEXT NOT NULL DEFAULT 'cpw-website',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "outdoor_events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "eventType" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "latitude" REAL,
    "longitude" REAL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "cost" REAL,
    "registrationRequired" BOOLEAN NOT NULL DEFAULT false,
    "registrationUrl" TEXT,
    "contactInfo" TEXT,
    "ageRestrictions" TEXT,
    "capacity" INTEGER,
    "difficulty" TEXT,
    "source" TEXT NOT NULL DEFAULT 'cpw-website',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "hunting_info" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "species" TEXT NOT NULL,
    "seasonStartDate" DATETIME NOT NULL,
    "seasonEndDate" DATETIME NOT NULL,
    "seasonDescription" TEXT,
    "units" TEXT NOT NULL,
    "licenseRequired" TEXT NOT NULL,
    "dailyBagLimit" INTEGER,
    "possessionLimit" INTEGER,
    "seasonLimit" INTEGER,
    "weaponRestrictions" TEXT NOT NULL,
    "specialRules" TEXT NOT NULL,
    "applicationDeadline" DATETIME,
    "drawResults" DATETIME,
    "tags" TEXT NOT NULL,
    "source" TEXT NOT NULL DEFAULT 'cpw-website',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "park_info" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "amenities" TEXT NOT NULL,
    "activities" TEXT NOT NULL,
    "dailyPassFee" REAL,
    "annualPassFee" REAL,
    "campingFee" REAL,
    "summerHours" TEXT,
    "winterHours" TEXT,
    "currentHours" TEXT NOT NULL,
    "campingAvailable" BOOLEAN NOT NULL DEFAULT false,
    "reservationRequired" BOOLEAN,
    "petPolicy" TEXT,
    "accessibility" TEXT NOT NULL,
    "currentConditions" TEXT,
    "alerts" TEXT NOT NULL,
    "source" TEXT NOT NULL DEFAULT 'cpw-website',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "avatar" TEXT,
    "emailVerified" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "user_favorites" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "troutStockingId" TEXT,
    "parkInfoId" TEXT,
    "eventId" TEXT,
    "customLocation" TEXT,
    "latitude" REAL,
    "longitude" REAL,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "user_favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "user_favorites_troutStockingId_fkey" FOREIGN KEY ("troutStockingId") REFERENCES "trout_stocking" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "user_favorites_parkInfoId_fkey" FOREIGN KEY ("parkInfoId") REFERENCES "park_info" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "user_favorites_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "outdoor_events" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "trip_plans" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "participants" INTEGER NOT NULL DEFAULT 1,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "trip_plans_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "trip_plan_items" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tripPlanId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "troutStockingId" TEXT,
    "parkInfoId" TEXT,
    "eventId" TEXT,
    "customTitle" TEXT,
    "customLocation" TEXT,
    "latitude" REAL,
    "longitude" REAL,
    "scheduledTime" DATETIME,
    "estimatedDuration" INTEGER,
    "notes" TEXT,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "trip_plan_items_tripPlanId_fkey" FOREIGN KEY ("tripPlanId") REFERENCES "trip_plans" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "trip_plan_items_troutStockingId_fkey" FOREIGN KEY ("troutStockingId") REFERENCES "trout_stocking" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "trip_plan_items_parkInfoId_fkey" FOREIGN KEY ("parkInfoId") REFERENCES "park_info" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "trip_plan_items_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "outdoor_events" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "user_subscriptions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "notifyEmail" BOOLEAN NOT NULL DEFAULT true,
    "notifyPush" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "user_subscriptions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "data_sync_logs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "recordsProcessed" INTEGER NOT NULL DEFAULT 0,
    "recordsAdded" INTEGER NOT NULL DEFAULT 0,
    "recordsUpdated" INTEGER NOT NULL DEFAULT 0,
    "errorMessage" TEXT,
    "executionTime" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE INDEX "trout_stocking_location_stockingDate_idx" ON "trout_stocking"("location", "stockingDate");

-- CreateIndex
CREATE INDEX "trout_stocking_stockingDate_idx" ON "trout_stocking"("stockingDate");

-- CreateIndex
CREATE INDEX "trout_stocking_species_idx" ON "trout_stocking"("species");

-- CreateIndex
CREATE INDEX "water_conditions_waterBody_idx" ON "water_conditions"("waterBody");

-- CreateIndex
CREATE INDEX "water_conditions_lastUpdated_idx" ON "water_conditions"("lastUpdated");

-- CreateIndex
CREATE INDEX "water_conditions_fishingConditions_idx" ON "water_conditions"("fishingConditions");

-- CreateIndex
CREATE INDEX "outdoor_events_eventType_startDate_idx" ON "outdoor_events"("eventType", "startDate");

-- CreateIndex
CREATE INDEX "outdoor_events_startDate_idx" ON "outdoor_events"("startDate");

-- CreateIndex
CREATE INDEX "outdoor_events_location_idx" ON "outdoor_events"("location");

-- CreateIndex
CREATE INDEX "hunting_info_species_idx" ON "hunting_info"("species");

-- CreateIndex
CREATE INDEX "hunting_info_seasonStartDate_seasonEndDate_idx" ON "hunting_info"("seasonStartDate", "seasonEndDate");

-- CreateIndex
CREATE INDEX "park_info_name_idx" ON "park_info"("name");

-- CreateIndex
CREATE INDEX "park_info_type_idx" ON "park_info"("type");

-- CreateIndex
CREATE INDEX "park_info_location_idx" ON "park_info"("location");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_favorites_userId_troutStockingId_key" ON "user_favorites"("userId", "troutStockingId");

-- CreateIndex
CREATE UNIQUE INDEX "user_favorites_userId_parkInfoId_key" ON "user_favorites"("userId", "parkInfoId");

-- CreateIndex
CREATE UNIQUE INDEX "user_favorites_userId_eventId_key" ON "user_favorites"("userId", "eventId");

-- CreateIndex
CREATE UNIQUE INDEX "user_subscriptions_userId_type_value_key" ON "user_subscriptions"("userId", "type", "value");

-- CreateIndex
CREATE INDEX "data_sync_logs_type_createdAt_idx" ON "data_sync_logs"("type", "createdAt");
