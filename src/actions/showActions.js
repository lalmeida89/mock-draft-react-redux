export const SHOW_POSITION = 'SHOW_POSITION';
export const SHOW_MENU = 'SHOW_MENU';
export const HIDE_MENU = 'HIDE_MENU';
export const SHOW_TEAM_MENU = 'SHOW_TEAM_MENU';
export const HIDE_TEAM_MENU = 'HIDE_TEAM_MENU';
export const SHOW_CURRENT_TEAM = 'SHOW_CURRENT_TEAM';
export const SHOW_DRAFTED_PLAYERS = 'SHOW_DRAFTED_PLAYERS';
export const SHOW_ROSTERS = 'SHOW_ROSTERS';
export const RENDER_SIDEBAR = 'RENDER_SIDEBAR';
export const FILTERED_PLAYERS = 'FILTERED_PLAYERS';

/* Depending on the button click on the intro component, we can filter what position we'd like to see,
setting the props to be the displayPlayers and then rendering the displayPlayers. Notes and Schedules just
sets them to true or false so that we can just see news and notes from a player or their schedule based
on what button is clicked*/


export const showPosition = displayPlayers => ({
    type: SHOW_POSITION,
    displayPlayers
});


export const showMenu = menu => ({
  type: SHOW_MENU,
  menu
})

export const hideMenu = menu => ({
  type: HIDE_MENU,
  menu
})

export const filteredPlayers = filteredPlayersList => ({
  type: FILTERED_PLAYERS,
  filteredPlayersList
})

export const showCurrentTeam = (currentTeam, teamNumber) => ({
    type: SHOW_CURRENT_TEAM,
    currentTeam,
    teamNumber
});

export const hideTeamMenu = () => ({
  type: HIDE_TEAM_MENU
});

export const showTeamMenu = () => ({
  type: SHOW_TEAM_MENU
});

export const showRosters = () => ({
  type: SHOW_ROSTERS
});

export const showDraftedPlayers = () => ({
  type: SHOW_DRAFTED_PLAYERS
});

export const renderSidebar = () => ({
  type: RENDER_SIDEBAR
});
