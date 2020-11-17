USE [master]
GO
/****** Object:  Database [BolusControllus]    Script Date: 11/6/2020 8:18:12 PM ******/
CREATE DATABASE [BolusControllus]
GO
ALTER DATABASE [BolusControllus] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [BolusControllus].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [BolusControllus] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [BolusControllus] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [BolusControllus] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [BolusControllus] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [BolusControllus] SET ARITHABORT OFF 
GO
ALTER DATABASE [BolusControllus] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [BolusControllus] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [BolusControllus] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [BolusControllus] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [BolusControllus] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [BolusControllus] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [BolusControllus] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [BolusControllus] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [BolusControllus] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [BolusControllus] SET  DISABLE_BROKER 
GO
ALTER DATABASE [BolusControllus] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [BolusControllus] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [BolusControllus] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [BolusControllus] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [BolusControllus] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [BolusControllus] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [BolusControllus] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [BolusControllus] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [BolusControllus] SET  MULTI_USER 
GO
ALTER DATABASE [BolusControllus] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [BolusControllus] SET DB_CHAINING OFF 
GO
ALTER DATABASE [BolusControllus] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [BolusControllus] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [BolusControllus] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [BolusControllus] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [BolusControllus] SET QUERY_STORE = OFF
GO
USE [BolusControllus]
GO
/****** Object:  User [bcUser]    Script Date: 11/6/2020 8:18:12 PM ******/
CREATE USER [bcUser] FOR LOGIN [bcUser] WITH DEFAULT_SCHEMA=[dbo]
GO
ALTER ROLE [db_datareader] ADD MEMBER [bcUser]
GO
ALTER ROLE [db_datawriter] ADD MEMBER [bcUser]
GO
/****** Object:  Table [dbo].[CarbRatio]    Script Date: 11/6/2020 8:18:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CarbRatio](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[userID] [int] NOT NULL,
	[carbRatio] [int] NOT NULL,
	[carbStartTime] [time](7) NULL,
	[carbEndTime] [time](7) NULL,
 CONSTRAINT [PK_CarbRatio] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CorrectionRatio]    Script Date: 11/6/2020 8:18:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CorrectionRatio](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[userID] [int] NOT NULL,
	[correctionRatio] [int] NOT NULL,
	[correctionStartTime] [time](7) NULL,
	[correctionEndTime] [time](7) NULL,
 CONSTRAINT [PK_CorrectionRatio] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Favorites]    Script Date: 11/6/2020 8:18:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Favorites](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[userID] [int] NOT NULL,
	[mealName] [nvarchar](50) NOT NULL,
	[mealCarbs] [int] NOT NULL,
 CONSTRAINT [PK_MealPlan] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[History]    Script Date: 11/6/2020 8:18:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[History](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[userID] [int] NOT NULL,
	[bloodGlucose] [int] NOT NULL,
	[carbs] [int] NOT NULL,
	[insulin] [int] NOT NULL,
	[time] [datetime] NOT NULL,
 CONSTRAINT [PK_History] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InsulinDuration]    Script Date: 11/6/2020 8:18:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InsulinDuration](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[userID] [int] NOT NULL,
	[duration] [int] NOT NULL,
 CONSTRAINT [PK_InsulinDuration] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 11/6/2020 8:18:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[userID] [int] IDENTITY(1,1) NOT NULL,
	[username] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[userID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[CarbRatio] ON 
GO
INSERT [dbo].[CarbRatio] ([id], [userID], [carbRatio], [carbStartTime], [carbEndTime]) VALUES (1, 1, 20, NULL, NULL)
GO
INSERT [dbo].[CarbRatio] ([id], [userID], [carbRatio], [carbStartTime], [carbEndTime]) VALUES (2, 38, 0, NULL, NULL)
GO
INSERT [dbo].[CarbRatio] ([id], [userID], [carbRatio], [carbStartTime], [carbEndTime]) VALUES (3, 39, 25, NULL, NULL)
GO
SET IDENTITY_INSERT [dbo].[CarbRatio] OFF
GO
SET IDENTITY_INSERT [dbo].[CorrectionRatio] ON 
GO
INSERT [dbo].[CorrectionRatio] ([id], [userID], [correctionRatio], [correctionStartTime], [correctionEndTime]) VALUES (1, 1, 25, NULL, NULL)
GO
INSERT [dbo].[CorrectionRatio] ([id], [userID], [correctionRatio], [correctionStartTime], [correctionEndTime]) VALUES (2, 38, 0, NULL, NULL)
GO
INSERT [dbo].[CorrectionRatio] ([id], [userID], [correctionRatio], [correctionStartTime], [correctionEndTime]) VALUES (3, 39, 60, NULL, NULL)
GO
SET IDENTITY_INSERT [dbo].[CorrectionRatio] OFF
GO
SET IDENTITY_INSERT [dbo].[Favorites] ON 
GO
INSERT [dbo].[Favorites] ([id], [userID], [mealName], [mealCarbs]) VALUES (1, 1, N'Pizza Supreme', 35)
GO
INSERT [dbo].[Favorites] ([id], [userID], [mealName], [mealCarbs]) VALUES (7, 1, N'Hot Dog', 25)
GO
INSERT [dbo].[Favorites] ([id], [userID], [mealName], [mealCarbs]) VALUES (9, 1, N'Sushi', 20)
GO
INSERT [dbo].[Favorites] ([id], [userID], [mealName], [mealCarbs]) VALUES (10, 1, N'Taco', 15)
GO
INSERT [dbo].[Favorites] ([id], [userID], [mealName], [mealCarbs]) VALUES (13, 1, N'Candy', 35)
GO
INSERT [dbo].[Favorites] ([id], [userID], [mealName], [mealCarbs]) VALUES (14, 1, N'Chicken Tenders', 35)
GO
INSERT [dbo].[Favorites] ([id], [userID], [mealName], [mealCarbs]) VALUES (15, 39, N'Sushi', 20)
GO
INSERT [dbo].[Favorites] ([id], [userID], [mealName], [mealCarbs]) VALUES (16, 1, N'Fries', 42)
GO
SET IDENTITY_INSERT [dbo].[Favorites] OFF
GO
SET IDENTITY_INSERT [dbo].[History] ON 
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (1, 1, 200, 0, 4, CAST(N'2020-10-31T15:42:30.037' AS DateTime))
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (2, 1, 350, 0, 10, CAST(N'2020-10-31T15:46:16.003' AS DateTime))
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (3, 1, 160, 19, 4, CAST(N'2020-10-31T15:48:20.677' AS DateTime))
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (4, 1, 105, 78, 5, CAST(N'2020-10-31T15:49:23.387' AS DateTime))
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (5, 1, 72, 55, 2, CAST(N'2020-10-31T15:50:13.090' AS DateTime))
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (6, 1, 100, 30, 2, CAST(N'2020-10-31T16:18:05.537' AS DateTime))
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (7, 1, 200, 26, 6, CAST(N'2020-10-31T16:18:39.577' AS DateTime))
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (8, 1, 100, 36, 2, CAST(N'2020-10-31T16:47:48.790' AS DateTime))
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (10, 1, 112, 17, 2, CAST(N'2020-11-01T03:01:22.063' AS DateTime))
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (11, 1, 250, 66, 10, CAST(N'2020-11-02T14:19:59.227' AS DateTime))
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (12, 1, 125, 10, 2, CAST(N'2020-11-02T14:20:37.393' AS DateTime))
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (13, 1, 175, 25, 5, CAST(N'2020-11-02T19:47:39.543' AS DateTime))
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (14, 1, 136, 32, 3, CAST(N'2020-11-02T19:59:27.683' AS DateTime))
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (15, 39, 137, 250, 11, CAST(N'2020-11-02T20:04:07.353' AS DateTime))
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (16, 1, 165, 0, 3, CAST(N'2020-11-03T16:52:01.403' AS DateTime))
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (17, 1, 275, 10, 8, CAST(N'2020-11-03T16:52:14.343' AS DateTime))
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (18, 1, 145, 0, 2, CAST(N'2020-11-04T01:36:25.383' AS DateTime))
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (19, 1, 137, 23, 3, CAST(N'2020-11-04T01:40:23.413' AS DateTime))
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (20, 1, 136, 132, 10, CAST(N'2020-11-04T11:50:50.637' AS DateTime))
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (21, 1, 77, 46, 2, CAST(N'2020-11-04T14:42:06.803' AS DateTime))
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (22, 1, 166, 18, 4, CAST(N'2020-11-04T15:10:11.517' AS DateTime))
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (23, 1, 156, 43, 5, CAST(N'2020-11-04T17:35:16.290' AS DateTime))
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (1021, 1, 165, 40, 5, CAST(N'2020-11-05T14:38:21.260' AS DateTime))
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (1026, 1, 165, 30, 4, CAST(N'2020-11-06T20:19:14.190' AS DateTime))
GO
INSERT [dbo].[History] ([id], [userID], [bloodGlucose], [carbs], [insulin], [time]) VALUES (1027, 1, 50, 60, 1, CAST(N'2020-11-06T20:19:49.573' AS DateTime))
GO
SET IDENTITY_INSERT [dbo].[History] OFF
GO
SET IDENTITY_INSERT [dbo].[InsulinDuration] ON 
GO
INSERT [dbo].[InsulinDuration] ([ID], [userID], [duration]) VALUES (1, 1, 4)
GO
INSERT [dbo].[InsulinDuration] ([ID], [userID], [duration]) VALUES (2, 38, 0)
GO
INSERT [dbo].[InsulinDuration] ([ID], [userID], [duration]) VALUES (3, 39, 5)
GO
SET IDENTITY_INSERT [dbo].[InsulinDuration] OFF
GO
SET IDENTITY_INSERT [dbo].[User] ON 
GO
INSERT [dbo].[User] ([userID], [username]) VALUES (1, N'eslutz')
GO
INSERT [dbo].[User] ([userID], [username]) VALUES (38, N'eric')
GO
INSERT [dbo].[User] ([userID], [username]) VALUES (39, N'rick')
GO
SET IDENTITY_INSERT [dbo].[User] OFF
GO
ALTER TABLE [dbo].[CarbRatio]  WITH CHECK ADD  CONSTRAINT [FK_CarbRatio_User] FOREIGN KEY([userID])
REFERENCES [dbo].[User] ([userID])
GO
ALTER TABLE [dbo].[CarbRatio] CHECK CONSTRAINT [FK_CarbRatio_User]
GO
ALTER TABLE [dbo].[CorrectionRatio]  WITH CHECK ADD  CONSTRAINT [FK_CorrectionRatio_User] FOREIGN KEY([userID])
REFERENCES [dbo].[User] ([userID])
GO
ALTER TABLE [dbo].[CorrectionRatio] CHECK CONSTRAINT [FK_CorrectionRatio_User]
GO
ALTER TABLE [dbo].[Favorites]  WITH CHECK ADD  CONSTRAINT [FK_Favorites_User] FOREIGN KEY([userID])
REFERENCES [dbo].[User] ([userID])
GO
ALTER TABLE [dbo].[Favorites] CHECK CONSTRAINT [FK_Favorites_User]
GO
ALTER TABLE [dbo].[InsulinDuration]  WITH CHECK ADD  CONSTRAINT [FK_InsulinDuration_User] FOREIGN KEY([userID])
REFERENCES [dbo].[User] ([userID])
GO
ALTER TABLE [dbo].[InsulinDuration] CHECK CONSTRAINT [FK_InsulinDuration_User]
GO
/****** Object:  StoredProcedure [dbo].[GetUser]    Script Date: 11/6/2020 8:18:12 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GetUser]
@username nvarchar(50),
@userID int OUTPUT
AS
IF EXISTS (SELECT * FROM [User] WHERE username = @username)
BEGIN
	SET @userID = (SELECT userID FROM [User] WHERE username = @username);
END
ELSE
BEGIN
	INSERT INTO [User] values (@username);
	SET @userID = SCOPE_IDENTITY();
	INSERT INTO [dbo].[CarbRatio] ([userID], [carbRatio]) VALUES (@userID, 0);
	INSERT INTO [dbo].[CorrectionRatio] ([userID], [correctionRatio]) VALUES (@userID, 0);
	INSERT INTO [dbo].[InsulinDuration] ([userID], [duration]) VALUES (@userID, 0);
END
GO
USE [master]
GO
ALTER DATABASE [BolusControllus] SET  READ_WRITE 
GO
