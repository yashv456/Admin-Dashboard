import {
  GridColumnMenuContainer,
  GridColumnMenuFilterItem,
  GridColumnMenuHideItem,
} from '@mui/x-data-grid';

const CustomColumnMenu = (props, colDef) => {
  const { hideMenu, currentColumn, open } = props;
  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
      <GridColumnMenuFilterItem
        colDef={colDef}
        onClick={hideMenu}
        column={currentColumn}
      />
      <GridColumnMenuHideItem
        colDef={colDef}
        onClick={hideMenu}
        column={currentColumn}
      />
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
