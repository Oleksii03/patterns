import { Player } from './classes/player';
import { GameHistory } from './classes/game-history';

const player = new Player();
const gameHistory = new GameHistory(player);

player.setState(80, 45, 'Mid');
gameHistory.backup();

player.setState(60, 30, 'B Site');

gameHistory.backup();

player.setState(30, 10, 'A Site');

gameHistory.showHistory();
gameHistory.undo();
gameHistory.undo();
gameHistory.undo();
