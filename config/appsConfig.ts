const appsConfig: {
  name: AbolfazlBookAppName;
  config: AbolfazlBookAppConfig;
}[] = [
  {
    name: "CMD",
    config: {
      defaultDimension: { height: 400, width: 600 },
      defaultPositin: { x: 0, y: 0 },
    },
  },
];

export type AbolfazlBookAppName = "CMD";
export type AbolfazlBookAppDimension = {
  width: number;
  height: number;
};
export type AbolfazlBookAppPosition = {
  x: number;
  y: number;
};
export type AbolfazlBookAppConfig = {
  defaultDimension: AbolfazlBookAppDimension;
  defaultPositin: AbolfazlBookAppPosition;
};

export const getAppConfig = (
  appName: string
): AbolfazlBookAppConfig | undefined => {
  return appsConfig.find((app) => app.name === appName)?.config;
};

export const getAppList = () => {
  return appsConfig.map((app) => app.name);
};
