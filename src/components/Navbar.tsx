import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import { useAppDispatch } from "../redux/store";
import { signOut } from "../redux/authSlice";

interface NavbarProps {
  onSwitchToAuth: () => void;
}

const Navbar = ({ onSwitchToAuth }: NavbarProps) => {
  const dispatch = useAppDispatch();

  const handleLogOutOnClick = () => {
    dispatch(signOut());
    onSwitchToAuth();
  };

  return (
    <>
      <nav className="bg-white h-[4.6rem]">
        <div className="flex justify-between items-center h-full px-5">
          <h1 className="h-100 text-medium md:text-large text-darkBlue font-bold">
            Task Management Board
          </h1>
          <Menu>
            <MenuButton>
              <Avatar
                name="John Doe"
                cursor="pointer"
                display="flex"
                justifyContent="center"
                alignItems="center"
                bgColor={"darkPurple"}
                fontSize={"large"}
              />
            </MenuButton>
            <MenuList
              as={VStack}
              spacing={4}
              margin={"4"}
              padding={"4"}
              borderColor={"lightgray"}
            >
              <MenuItem as={VStack} alignItems={"start"}>
                <Box color={"gray"} fontSize={"small"}>
                  Signed In as:{" "}
                </Box>
                <Box color={"darkBlue"} fontSize={"small"} fontWeight={"bold"}>
                  John Doe
                </Box>
              </MenuItem>
              <MenuItem
                as={Button}
                onClick={handleLogOutOnClick}
                colorScheme="blue"
                color={"white"}
                bgColor={"darkBlue"}
              >
                Sign Out
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
