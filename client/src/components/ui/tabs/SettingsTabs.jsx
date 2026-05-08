import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { BlackButton } from "../buttons/BlackButton";
import { Input } from "../input/Input";
import { useState } from "react";
import CardImage from "../CardImage";

export const SettingsTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: { xs: 1, sm: 3 } }}>{children}</Box>}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <>
      {/* Tabs */}
      <div className="card mx-2 w-full rounded-2xl p-1 sm:p-2">
        <Box sx={{ maxWidth: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            indicatorColor="primary"
            textColor="inherit"
            sx={{
              width: "100%",
              "& .MuiTabs-flexContainer": {
                justifyContent: { xs: "flex-start", md: "center" },
              },
              "& .MuiTab-root": {
                minWidth: "unset",
                px: { xs: 1, sm: 2 },
                fontWeight: 700,
                fontSize: {
                  xs: "0.7rem",
                  sm: "0.9rem",
                  md: "1rem",
                },
                whiteSpace: "nowrap",
              },
            }}
          >
            <Tab label="Church Info" {...a11yProps(0)} />
            <Tab label="Services" {...a11yProps(1)} />
            <Tab label="Ministries" {...a11yProps(2)} />
          </Tabs>
        </Box>
      </div>

      {/* Panels */}
      <div className="card w-full mx-2 rounded-2xl mt-2 p-2 sm:p-3 flex flex-col font-secondary">
        <CustomTabPanel value={value} index={0}>
          <h2 className="font-semibold text-base sm:text-lg">
            Church Information
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-8">
            Basic church details and contact information.
          </p>

          <div className="grid grid-cols-1 gap-3">
            <Input
              label="Church Name"
              value={"Jesus Is Lord Church Atimonan"}
              disabled={true}
            />
            <Input
              label="Church Address"
              value={"Iskong Bantay St. Brgy. Zone IV Poblacion"}
              disabled={true}
            />
          </div>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <div className="flex flex-col gap-2 mb-4">
            <div>
              <h2 className="font-semibold text-base sm:text-lg">
                Service Schedule
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Manage service times and locations.
              </p>
            </div>

            <div className="w-full sm:w-auto">
              <BlackButton val="+ Add Event" />
            </div>
          </div>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={2}>
          <div className="flex flex-col gap-2 mb-4">
            <div>
              <h2 className="font-semibold text-base sm:text-lg">
                Ministry Management
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Configure church ministries and leadership assignments.
              </p>
            </div>

            <div className="w-full sm:w-auto">
              <BlackButton val="+ Add Ministry" />
            </div>
          </div>
        </CustomTabPanel>
      </div>

      {/* ABOUT US */}
      <div className="w-full mx-2 rounded-2xl mt-2 p-2 sm:p-3 flex flex-col font-secondary">
        <h1 className="text-lg sm:text-2xl text-white font-bold mt-4 mb-4 text-center">
          ABOUT US
        </h1>

        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 mb-4">
          <CardImage
            title="ALTEZ, JOY ANN S."
            image="https://i.pinimg.com/736x/14/98/cb/1498cb7c3748f261e0d1f5c7bc604de4.jpg"
            description="Documentor"
          />

          <CardImage
            title="Andaluz, Hero E."
            image="https://i.pinimg.com/736x/05/55/db/0555db705db7425f5ab556c13b985d4e.jpg"
            description="tester/programmer"
          />

          <CardImage
            title="Canzon, Jan Marti P."
            image="https://i.pinimg.com/736x/d5/fe/23/d5fe23f8fe27cbf2cfb14462670c9ccf.jpg"
            description="Documentor/Tester"
          />

          <CardImage
            title="Gariguez, Lemuel S."
            image="https://i.pinimg.com/1200x/ab/c3/c6/abc3c6e9c6f9b19a6452ba03bbb98133.jpg"
            description="Analyst"
          />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
          <CardImage
            title="Lorica, Gena A"
            image="https://i.pinimg.com/736x/5b/35/fa/5b35fa7c35d4dec4ba4c7922fa8e428d.jpg"
            description="Documentor"
          />

          <CardImage
            title="Ortegoza, Marc Narvel L."
            image="https://i.pinimg.com/1200x/af/a7/40/afa740da77259f74f5c71f008028ca1b.jpg"
            description="Front-end Designer/Programmer"
          />

          <CardImage
            title="Rabano, Lady Anne L."
            image="https://i.pinimg.com/736x/89/e7/93/89e7935f1b42b93d6f8f9ea24cd984bd.jpg"
            description="Front-end Designer/Programmer/Documentor"
          />
        </div>
      </div>
    </>
  );
};
