/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/action.ts":
/*!***********************!*\
  !*** ./src/action.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "performAction": () => (/* binding */ performAction),
/* harmony export */   "sanitizeAction": () => (/* binding */ sanitizeAction)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.ts");

function performAction(action, callback) {
    if (action.type === "check_or_fold") {
        if ((0,_ui__WEBPACK_IMPORTED_MODULE_0__.canCheck)())
            (0,_ui__WEBPACK_IMPORTED_MODULE_0__.check)();
        else
            (0,_ui__WEBPACK_IMPORTED_MODULE_0__.fold)();
        callback === null || callback === void 0 ? void 0 : callback();
    }
    else if (action.type === "call") {
        (0,_ui__WEBPACK_IMPORTED_MODULE_0__.call)();
        callback === null || callback === void 0 ? void 0 : callback();
    }
    else {
        switch (action.raiseAmount) {
            case "min":
            default:
                (0,_ui__WEBPACK_IMPORTED_MODULE_0__.minRaise)(callback);
                break;
            case "1/2_pot":
                (0,_ui__WEBPACK_IMPORTED_MODULE_0__.halfPotRaise)(callback);
                break;
            // TODO: usare 3/4 pot?
            // case "3/4_pot":
            //     tqPotRaise(callback);
            //     break;
            case "pot":
                (0,_ui__WEBPACK_IMPORTED_MODULE_0__.potRaise)(callback);
                break;
            // TODO: usare overbet?
            case "all_in":
                (0,_ui__WEBPACK_IMPORTED_MODULE_0__.allInRaise)(callback);
                break;
        }
    }
}
function sanitizeAction(action, state) {
    let sanitized = Object.assign({}, action);
    switch (sanitized.type) {
        case "check_or_fold":
        case "call":
        case "raise":
            // ok, no problem here
            break;
        default:
            sanitized.type = "check_or_fold";
            break;
    }
    if (sanitized.type === "raise") {
        switch (sanitized.raiseAmount) {
            case "min":
            case "1/2_pot":
            // case "3/4_pot":
            case "pot":
            // case "overbet":
            case "all_in":
                // ok, no problem here
                break;
            default:
                sanitized.raiseAmount = "min";
                break;
        }
    }
    return sanitized;
}


/***/ }),

/***/ "./src/ai/ai.ts":
/*!**********************!*\
  !*** ./src/ai/ai.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAction": () => (/* binding */ getAction)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./src/state.ts");
/* harmony import */ var _aiUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aiUtils */ "./src/ai/aiUtils.ts");
/* harmony import */ var _ifThenElse_ifThenElseAi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ifThenElse/ifThenElseAi */ "./src/ai/ifThenElse/ifThenElseAi.ts");



function getAction(state) {
    if (state.phase.code > _state__WEBPACK_IMPORTED_MODULE_0__.PreflopPhase.code) {
        console.log("stats", {
            flushDraw: (0,_aiUtils__WEBPACK_IMPORTED_MODULE_1__.isOneCardFlushPossible)(state.handPlusBoard),
            openStraight: (0,_aiUtils__WEBPACK_IMPORTED_MODULE_1__.isOpenEndedStraightPresent)(state.handPlusBoard),
            oneCardFlush: (0,_aiUtils__WEBPACK_IMPORTED_MODULE_1__.isOneCardFlushPossible)(state.board),
            oneCardStraight: (0,_aiUtils__WEBPACK_IMPORTED_MODULE_1__.isOneCardStraightPossible)(state.board),
            bestGapStraight: (0,_aiUtils__WEBPACK_IMPORTED_MODULE_1__.findBestGapStraight)(state.board),
            boardPairs: (0,_aiUtils__WEBPACK_IMPORTED_MODULE_1__.getPairs)(state.board),
        });
    }
    return (0,_ifThenElse_ifThenElseAi__WEBPACK_IMPORTED_MODULE_2__.ifThenElseAction)(state);
}


/***/ }),

/***/ "./src/ai/aiUtils.ts":
/*!***************************!*\
  !*** ./src/ai/aiUtils.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findBestGapStraight": () => (/* binding */ findBestGapStraight),
/* harmony export */   "findBestStraight": () => (/* binding */ findBestStraight),
/* harmony export */   "findFirstConsecutives": () => (/* binding */ findFirstConsecutives),
/* harmony export */   "findFirstStraight": () => (/* binding */ findFirstStraight),
/* harmony export */   "getAvailableFlushValues": () => (/* binding */ getAvailableFlushValues),
/* harmony export */   "getFirstOfSuit": () => (/* binding */ getFirstOfSuit),
/* harmony export */   "getHighestCard": () => (/* binding */ getHighestCard),
/* harmony export */   "getHighestSuitCount": () => (/* binding */ getHighestSuitCount),
/* harmony export */   "getLowestCard": () => (/* binding */ getLowestCard),
/* harmony export */   "getNs": () => (/* binding */ getNs),
/* harmony export */   "getPairs": () => (/* binding */ getPairs),
/* harmony export */   "getSuitCounts": () => (/* binding */ getSuitCounts),
/* harmony export */   "getTriplets": () => (/* binding */ getTriplets),
/* harmony export */   "getValueCounts": () => (/* binding */ getValueCounts),
/* harmony export */   "hasFlushDrawOrOpenEndedStraight": () => (/* binding */ hasFlushDrawOrOpenEndedStraight),
/* harmony export */   "isOneCardFlushOrStraightPossible": () => (/* binding */ isOneCardFlushOrStraightPossible),
/* harmony export */   "isOneCardFlushPossible": () => (/* binding */ isOneCardFlushPossible),
/* harmony export */   "isOneCardStraightPossible": () => (/* binding */ isOneCardStraightPossible),
/* harmony export */   "isOpenEndedStraightPresent": () => (/* binding */ isOpenEndedStraightPresent),
/* harmony export */   "removeSortedDuplicateValuesInPlace": () => (/* binding */ removeSortedDuplicateValuesInPlace),
/* harmony export */   "sortInPlaceAscending": () => (/* binding */ sortInPlaceAscending),
/* harmony export */   "sortInPlaceAscendingRemovingDuplicates": () => (/* binding */ sortInPlaceAscendingRemovingDuplicates)
/* harmony export */ });
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cards */ "./src/cards.ts");

function isOneCardFlushOrStraightPossible(cards) {
    return isOneCardFlushPossible(cards) || isOneCardStraightPossible(cards);
}
function hasFlushDrawOrOpenEndedStraight(cards) {
    return isOneCardFlushPossible(cards) || isOpenEndedStraightPresent(cards);
}
/**
 * Is only one more card needed for a flush?
 * In other words returns if there are four cards of the same suit.
 */
function isOneCardFlushPossible(cards) {
    const counts = {};
    for (const c of cards) {
        if (!counts[c.suit])
            counts[c.suit] = 1;
        else
            counts[c.suit] += 1;
    }
    for (const suit in counts)
        if (counts[suit] === 4)
            return true;
    return false;
}
/**
 * Is only one more card needed for a straight?
 */
function isOneCardStraightPossible(cards) {
    if (isSimpleOneCardStraightPossible(cards))
        return true;
    if (cards.length < 4)
        return false;
    const lowestAceCards = useSortedLowestAce(cards);
    if (lowestAceCards === null)
        return false;
    return isSimpleOneCardStraightPossible(lowestAceCards);
}
function useLowestAce(cards) {
    const firstAceIndex = cards.findIndex(c => c.value.code === _cards__WEBPACK_IMPORTED_MODULE_0__.AceCode);
    if (firstAceIndex < 0)
        return null;
    const firstAce = cards[firstAceIndex];
    const lowestAceCards = [...cards];
    lowestAceCards[firstAceIndex] = Object.assign(Object.assign({}, firstAce), { value: Object.assign(Object.assign({}, firstAce.value), { code: _cards__WEBPACK_IMPORTED_MODULE_0__.LowestStraightAceCode }) });
    return lowestAceCards;
}
function useSortedLowestAce(cards) {
    const lowestAceCards = useLowestAce(cards);
    if (lowestAceCards === null)
        return null;
    return sortInPlaceAscending(lowestAceCards);
}
/**
 * Simple because it does not account for A in both A2345 and TJQKA
 */
function isSimpleOneCardStraightPossible(cards) {
    if (cards.length < 4)
        return false;
    const sorted = sortInPlaceAscendingRemovingDuplicates([...cards]);
    const gapStraight = simpleFindFirstGapStraightOnSortedCards(sorted);
    return gapStraight !== null;
}
/**
 * Simple because it does not account for A in both A2345 and TJQKA
 */
function simpleFindFirstGapStraightOnSortedCards(sorted, startIndex = 0) {
    const consecutives = findFirstConsecutives(sorted, startIndex);
    if (consecutives === null)
        return null;
    if (consecutives.count >= 4)
        return { firstPiece: consecutives };
    if (consecutives.count === 2) {
        const followingConsecutives = findFirstConsecutives(sorted, consecutives.startIndex + consecutives.count);
        if (followingConsecutives === null)
            return null;
        if (consecutives.min.value.code + 3 === followingConsecutives.min.value.code) {
            return {
                firstPiece: consecutives,
                secondPiece: followingConsecutives,
            };
        }
        return null;
    }
    // consecutives count is 3
    if (consecutives.startIndex > 0) {
        if (consecutives.min.value.code === sorted[consecutives.startIndex - 1].value.code + 2) {
            return {
                firstPiece: {
                    startIndex: consecutives.startIndex - 1,
                    count: 1,
                    min: sorted[consecutives.startIndex - 1],
                },
                secondPiece: consecutives,
            };
        }
    }
    if (consecutives.startIndex + 3 < sorted.length) {
        if (consecutives.min.value.code + 4 === sorted[consecutives.startIndex + 3].value.code) {
            return {
                firstPiece: consecutives,
                secondPiece: {
                    startIndex: consecutives.startIndex + 3,
                    count: 1,
                    min: sorted[consecutives.startIndex + 3],
                },
            };
        }
    }
    return null;
}
/**
 * A gap straight is one that is missing one of the 5 cards
 */
function findBestGapStraight(cards) {
    if (cards.length < 4)
        return null;
    const sorted = sortInPlaceAscendingRemovingDuplicates([...cards]);
    for (let i = cards.length - 4; i >= 0; i--) {
        const gapStraight = simpleFindFirstGapStraightOnSortedCards(sorted, i);
        if (gapStraight !== null)
            return gapStraight;
    }
    const lowestAceCards = useSortedLowestAce(sorted);
    if (lowestAceCards === null)
        return null;
    const lowestGapStraight = simpleFindFirstGapStraightOnSortedCards(lowestAceCards);
    return lowestGapStraight;
}
/**
 * Is there an open ended straight in these cards?
 * An open ended straight is one where either the top or bottom card is missing,
 * for instance 8,7,6,5 is an open ended straight because it's missing either a 9 or a 4
 */
function isOpenEndedStraightPresent(cards) {
    if (cards.length < 4)
        return false;
    const sorted = sortInPlaceAscendingRemovingDuplicates([...cards]);
    const consecutives = findFirstConsecutives(sorted, 0);
    if (consecutives === null)
        return false;
    return consecutives.count >= 4;
}
function findBestStraight(cards) {
    if (cards.length < 5)
        return null;
    const sorted = sortInPlaceAscendingRemovingDuplicates([...cards]);
    for (let i = sorted.length - 5; i >= 0; i--) {
        const straight = findFirstStraightOnSortedCards(sorted, i);
        if (straight !== null)
            return straight;
    }
    return null;
}
function findFirstStraight(cards, startIndex = 0) {
    if (cards.length < 5)
        return null;
    const sorted = sortInPlaceAscendingRemovingDuplicates([...cards]);
    return findFirstStraightOnSortedCards(sorted, startIndex);
}
function findFirstStraightOnSortedCards(sorted, startIndex = 0) {
    const straight = simpleFindFirstStraightOnSortedCards(sorted, startIndex);
    if (straight !== null)
        return straight;
    if (sorted.length < 5 || startIndex > 0)
        return null;
    const lowestAceCards = useSortedLowestAce(sorted);
    if (lowestAceCards === null)
        return null;
    sortInPlaceAscending(lowestAceCards);
    return simpleFindFirstStraightOnSortedCards(lowestAceCards);
}
/**
 * Simple because it does not account for A in both A2345 and TJQKA
 */
function simpleFindFirstStraightOnSortedCards(sorted, startIndex = 0) {
    if (sorted.length < 5)
        return null;
    for (let i = startIndex; i < sorted.length - 5; i++) {
        const consecutives = findFirstConsecutives(sorted, i);
        if (consecutives !== null && consecutives.count >= 5)
            return consecutives;
    }
    return null;
}
function findFirstConsecutives(sortedCards, startIndex = 0) {
    if (sortedCards.length - startIndex < 2)
        return null;
    const consecutives = {
        startIndex,
        count: 1,
        min: sortedCards[startIndex],
    };
    for (let i = startIndex + 1; i < sortedCards.length; i++) {
        if (sortedCards[i].value.code === consecutives.min.value.code + consecutives.count) {
            consecutives.count += 1;
        }
        else if (consecutives.count === 1) {
            consecutives.startIndex = i;
            consecutives.min = sortedCards[i];
        }
        else {
            return consecutives;
        }
    }
    if (consecutives.count > 1)
        return consecutives;
    return null;
}
function getSuitCounts(cards) {
    const counts = {};
    for (const c of cards) {
        if (!counts[c.suit])
            counts[c.suit] = [c];
        else
            counts[c.suit].push(c);
    }
    return counts;
}
function getHighestSuitCount(cards) {
    const counts = getSuitCounts(cards);
    let max = null;
    for (const suit in counts)
        if (max === null || max.length < counts[suit].length)
            max = counts[suit];
    return max;
}
function getAvailableFlushValues(suitedCards) {
    const available = [];
    for (let i = 2; i < _cards__WEBPACK_IMPORTED_MODULE_0__.AceCode; i++)
        available.push(i);
    for (const c of suitedCards) {
        const index = available.indexOf(c.value.code);
        if (index >= 0)
            available.splice(index, 1);
    }
    return available;
}
function getFirstOfSuit(cards, suit) {
    for (const c of cards)
        if (c.suit === suit)
            return c;
    return null;
}
function getValueCounts(cards) {
    const counts = {};
    for (const c of cards) {
        if (!counts[c.value.code])
            counts[c.value.code] = [c];
        else
            counts[c.value.code].push(c);
    }
    return counts;
}
/**
 * If `n === 2` then this is equal to @see getPairs
 */
function getNs(cards, n) {
    const counts = getValueCounts(cards);
    const ns = [];
    for (const key in counts) {
        const counted = counts[key];
        if (counted.length === n)
            ns.push(counted);
    }
    return ns;
}
/**
 * Returns a list of all pairs in `cards`
 */
function getPairs(cards) {
    const pairs = getNs(cards, 2);
    return pairs;
}
/**
 * Returns a list of all triplets (three cards of the same value) in `cards`
 */
function getTriplets(cards) {
    const threes = getNs(cards, 3);
    return threes;
}
function getHighestCard(cards) {
    let max = null;
    for (const c of cards)
        if (max === null || c.value.code > max.value.code)
            max = c;
    return max;
}
function getLowestCard(cards) {
    let min = null;
    for (const c of cards)
        if (min === null || c.value.code < min.value.code)
            min = c;
    return min;
}
function sortInPlaceAscending(cards) {
    return cards.sort((c1, c2) => c1.value.code - c2.value.code);
}
function removeSortedDuplicateValuesInPlace(cards) {
    for (let i = 0; i < cards.length - 1; i++) {
        while (i + 1 < cards.length && cards[i].value.code === cards[i + 1].value.code)
            cards.splice(i, 1);
    }
    return cards;
}
function sortInPlaceAscendingRemovingDuplicates(cards) {
    const sorted = sortInPlaceAscending(cards);
    return removeSortedDuplicateValuesInPlace(sorted);
}


/***/ }),

/***/ "./src/ai/ifThenElse/flushAction.ts":
/*!******************************************!*\
  !*** ./src/ai/ifThenElse/flushAction.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "flushAction": () => (/* binding */ flushAction)
/* harmony export */ });
/* harmony import */ var _aiUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aiUtils */ "./src/ai/aiUtils.ts");
/* harmony import */ var _handActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handActions */ "./src/ai/ifThenElse/handActions.ts");


function flushAction(state) {
    const mostSuitCards = (0,_aiUtils__WEBPACK_IMPORTED_MODULE_0__.getHighestSuitCount)(state.board);
    if (mostSuitCards.length === 3) {
        console.log("flush state", {
            mostSuitCards,
        });
        return (0,_handActions__WEBPACK_IMPORTED_MODULE_1__.bestHandAction)(state);
    }
    const availableFlushValues = (0,_aiUtils__WEBPACK_IMPORTED_MODULE_0__.getAvailableFlushValues)(mostSuitCards);
    const myFlushCard = (0,_aiUtils__WEBPACK_IMPORTED_MODULE_0__.getFirstOfSuit)(state.hand, mostSuitCards[0].suit);
    const index = availableFlushValues.indexOf(myFlushCard.value.code);
    console.log("flush state", {
        mostSuitCards,
        availableFlushValues,
        myFlushCard,
        index,
    });
    if (index === availableFlushValues.length - 1)
        return (0,_handActions__WEBPACK_IMPORTED_MODULE_1__.bestHandAction)(state);
    if (index === availableFlushValues.length - 2)
        return (0,_handActions__WEBPACK_IMPORTED_MODULE_1__.strongHandAction)(state);
    if (index > 4)
        return (0,_handActions__WEBPACK_IMPORTED_MODULE_1__.riskyHandAction)(state);
    return (0,_handActions__WEBPACK_IMPORTED_MODULE_1__.weakHandAction)(state);
}


/***/ }),

/***/ "./src/ai/ifThenElse/handActions.ts":
/*!******************************************!*\
  !*** ./src/ai/ifThenElse/handActions.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bestHandAction": () => (/* binding */ bestHandAction),
/* harmony export */   "bluffHandAction": () => (/* binding */ bluffHandAction),
/* harmony export */   "riskyHandAction": () => (/* binding */ riskyHandAction),
/* harmony export */   "strongHandAction": () => (/* binding */ strongHandAction),
/* harmony export */   "weakHandAction": () => (/* binding */ weakHandAction)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state */ "./src/state.ts");
/* harmony import */ var _probabilisticAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../probabilisticAction */ "./src/ai/probabilisticAction.ts");


function bestHandAction(state) {
    return (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_1__.probabilisticAction)((0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_1__.postfixNameToCall)("best", state), state, (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_1__.uniformFill)({
        checkFoldProbability: state.toCall === 0 && state.phase.code < _state__WEBPACK_IMPORTED_MODULE_0__.RiverPhase.code
            ? undefined
            : 0,
        minRaiseProbability: 0.3,
        halfPotRaiseProbability: 0.25,
        potRaiseProbability: 0.15,
        allInProbability: 0.05,
    }));
}
function strongHandAction(state) {
    return (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_1__.probabilisticAction)((0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_1__.postfixNameToCall)("strong", state), state, (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_1__.toCallDependent)(state, {
        zero: {
            checkFoldProbability: 0.2,
            minRaiseProbability: 0.4,
            halfPotRaiseProbability: 0.25,
            potRaiseProbability: 0.12,
            allInProbability: 0.03,
        },
        nonZero: (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_1__.checkCallBased)({
            checkFoldProbability: Math.min(0.05 * (state.toCall / state.prevPhasePot), 0.1),
            callProbability: Math.min(0.5 * (state.toCall / state.prevPhasePot), 0.65),
            remainingMinRaiseShare: 0.4,
            remainingHalfPotRaiseShare: 0.33,
            remainingPotRaiseShare: 0.24,
            remainingAllInShare: 0.03,
        }),
    }));
}
function riskyHandAction(state) {
    return (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_1__.probabilisticAction)((0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_1__.postfixNameToCall)("risky", state), state, (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_1__.toCallDependent)(state, {
        zero: {
            checkFoldProbability: 0.3,
            minRaiseProbability: 0.42,
            halfPotRaiseProbability: 0.17,
            potRaiseProbability: 0.09,
            allInProbability: 0.02,
        },
        nonZero: (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_1__.checkCallBased)({
            checkFoldProbability: Math.min(0.4 * (state.toCall / state.prevPhasePot), 0.2),
            callProbability: Math.min(1.1 * (state.toCall / state.prevPhasePot), 0.6),
            remainingMinRaiseShare: 0.4,
            remainingHalfPotRaiseShare: 0.33,
            remainingPotRaiseShare: 0.24,
            remainingAllInShare: 0.03,
        }),
    }));
}
function weakHandAction(state) {
    return (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_1__.probabilisticAction)((0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_1__.postfixNameToCall)("weak", state), state, (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_1__.toCallDependent)(state, {
        zero: {
            checkFoldProbability: 0.4,
            minRaiseProbability: 0.1,
            halfPotRaiseProbability: 0.27,
            potRaiseProbability: 0.2,
            allInProbability: 0.03,
        },
        nonZero: (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_1__.checkCallBased)({
            checkFoldProbability: Math.min(2 * (state.toCall / state.prevPhasePot), 0.5),
            callProbability: (1 - (state.toCall / state.prevPhasePot)) * 0.2,
            remainingMinRaiseShare: 0.2,
            remainingHalfPotRaiseShare: 0.32,
            remainingPotRaiseShare: 0.38,
            remainingAllInShare: 0.1,
        }),
    }));
}
function bluffHandAction(state) {
    return (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_1__.probabilisticAction)((0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_1__.postfixNameToCall)("bluff", state), state, (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_1__.toCallDependent)(state, {
        zero: {
            checkFoldProbability: 0.7,
            minRaiseProbability: 0.1,
            halfPotRaiseProbability: 0.07,
            potRaiseProbability: 0.1,
            allInProbability: 0.03,
        },
        nonZero: (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_1__.checkCallBased)({
            checkFoldProbability: Math.min(2 * (state.toCall / state.prevPhasePot), 0.7),
            callProbability: 0.1,
            remainingMinRaiseShare: 0.15,
            remainingHalfPotRaiseShare: 0.32,
            remainingPotRaiseShare: 0.43,
            remainingAllInShare: 0.1,
        }),
    }));
}


/***/ }),

/***/ "./src/ai/ifThenElse/highCardAction.ts":
/*!*********************************************!*\
  !*** ./src/ai/ifThenElse/highCardAction.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "highCardAction": () => (/* binding */ highCardAction)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state */ "./src/state.ts");
/* harmony import */ var _aiUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../aiUtils */ "./src/ai/aiUtils.ts");
/* harmony import */ var _handActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handActions */ "./src/ai/ifThenElse/handActions.ts");



function highCardAction(state) {
    if (state.phase.code < _state__WEBPACK_IMPORTED_MODULE_0__.RiverPhase.code) {
        if ((0,_aiUtils__WEBPACK_IMPORTED_MODULE_1__.hasFlushDrawOrOpenEndedStraight)(state.handPlusBoard)) {
            if (state.phase === _state__WEBPACK_IMPORTED_MODULE_0__.FlopPhase)
                return (0,_handActions__WEBPACK_IMPORTED_MODULE_2__.strongHandAction)(state);
            else // turn
                return (0,_handActions__WEBPACK_IMPORTED_MODULE_2__.weakHandAction)(state);
        }
        else {
            return (0,_handActions__WEBPACK_IMPORTED_MODULE_2__.bluffHandAction)(state);
        }
    }
    else { // river
        // TODO: se l'avversario ha solo checkato raise more likely
        return (0,_handActions__WEBPACK_IMPORTED_MODULE_2__.bluffHandAction)(state);
    }
}


/***/ }),

/***/ "./src/ai/ifThenElse/ifThenElseAi.ts":
/*!*******************************************!*\
  !*** ./src/ai/ifThenElse/ifThenElseAi.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ifThenElseAction": () => (/* binding */ ifThenElseAction)
/* harmony export */ });
/* harmony import */ var _rank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rank */ "./src/rank.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state */ "./src/state.ts");
/* harmony import */ var _flushAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flushAction */ "./src/ai/ifThenElse/flushAction.ts");
/* harmony import */ var _handActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handActions */ "./src/ai/ifThenElse/handActions.ts");
/* harmony import */ var _highCardAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./highCardAction */ "./src/ai/ifThenElse/highCardAction.ts");
/* harmony import */ var _pairAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pairAction */ "./src/ai/ifThenElse/pairAction.ts");
/* harmony import */ var _preflopActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preflopActions */ "./src/ai/ifThenElse/preflopActions.ts");
/* harmony import */ var _straightAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./straightAction */ "./src/ai/ifThenElse/straightAction.ts");
/* harmony import */ var _threeAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./threeAction */ "./src/ai/ifThenElse/threeAction.ts");
/* harmony import */ var _twoPairAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./twoPairAction */ "./src/ai/ifThenElse/twoPairAction.ts");










function ifThenElseAction(state) {
    if (state.phase === _state__WEBPACK_IMPORTED_MODULE_1__.PreflopPhase)
        return (0,_preflopActions__WEBPACK_IMPORTED_MODULE_6__.preflopAction)(state);
    else if (state.handRank.code >= _rank__WEBPACK_IMPORTED_MODULE_0__.FullHouseRank.code)
        return (0,_handActions__WEBPACK_IMPORTED_MODULE_3__.bestHandAction)(state);
    switch (state.handRank) {
        case _rank__WEBPACK_IMPORTED_MODULE_0__.HighCardRank:
            return (0,_highCardAction__WEBPACK_IMPORTED_MODULE_4__.highCardAction)(state);
        case _rank__WEBPACK_IMPORTED_MODULE_0__.PairRank:
            return (0,_pairAction__WEBPACK_IMPORTED_MODULE_5__.pairAction)(state);
        case _rank__WEBPACK_IMPORTED_MODULE_0__.TwoPairRank:
            return (0,_twoPairAction__WEBPACK_IMPORTED_MODULE_9__.twoPairAction)(state);
        case _rank__WEBPACK_IMPORTED_MODULE_0__.ThreeOfKindRank:
            return (0,_threeAction__WEBPACK_IMPORTED_MODULE_8__.threeAction)(state);
        case _rank__WEBPACK_IMPORTED_MODULE_0__.StraightRank:
            return (0,_straightAction__WEBPACK_IMPORTED_MODULE_7__.straightAction)(state);
        case _rank__WEBPACK_IMPORTED_MODULE_0__.FlushRank:
            return (0,_flushAction__WEBPACK_IMPORTED_MODULE_2__.flushAction)(state);
        default:
            return (0,_handActions__WEBPACK_IMPORTED_MODULE_3__.bluffHandAction)(state);
    }
}


/***/ }),

/***/ "./src/ai/ifThenElse/pairAction.ts":
/*!*****************************************!*\
  !*** ./src/ai/ifThenElse/pairAction.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pairAction": () => (/* binding */ pairAction),
/* harmony export */   "pairActionIgnoringBoardPair": () => (/* binding */ pairActionIgnoringBoardPair)
/* harmony export */ });
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../cards */ "./src/cards.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state */ "./src/state.ts");
/* harmony import */ var _aiUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../aiUtils */ "./src/ai/aiUtils.ts");
/* harmony import */ var _handActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handActions */ "./src/ai/ifThenElse/handActions.ts");
/* harmony import */ var _highCardAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./highCardAction */ "./src/ai/ifThenElse/highCardAction.ts");





function pairAction(state) {
    const boardPairs = (0,_aiUtils__WEBPACK_IMPORTED_MODULE_2__.getPairs)(state.board);
    if (boardPairs.length > 0)
        return (0,_highCardAction__WEBPACK_IMPORTED_MODULE_4__.highCardAction)(state);
    return pairActionIgnoringBoardPair(state);
}
function pairActionIgnoringBoardPair(state) {
    const myPair = (0,_aiUtils__WEBPACK_IMPORTED_MODULE_2__.getPairs)(state.handPlusBoard)[0];
    if (!myPair || myPair.length === 0)
        throw new Error("pair expected but not found " + JSON.stringify(state.handPlusBoard, null, 4));
    const highestBoardCard = (0,_aiUtils__WEBPACK_IMPORTED_MODULE_2__.getHighestCard)(state.board);
    const isTopPair = myPair[0].value.code >= highestBoardCard.value.code;
    const isHandPair = state.hand[0].value.code === state.hand[1].value.code;
    const kicker = !isHandPair
        ? state.hand[0].value.code !== myPair[0].value.code
            ? state.hand[0]
            : state.hand[1]
        : highestBoardCard;
    console.log("pair hand state", {
        myPair,
        highestBoardCard,
        isTopPair,
        isHandPair,
        kicker,
    });
    if (state.phase.code < _state__WEBPACK_IMPORTED_MODULE_1__.RiverPhase.code) {
        if ((0,_aiUtils__WEBPACK_IMPORTED_MODULE_2__.hasFlushDrawOrOpenEndedStraight)(state.handPlusBoard)) {
            if (isTopPair)
                return (0,_handActions__WEBPACK_IMPORTED_MODULE_3__.strongHandAction)(state);
            else
                return (0,_handActions__WEBPACK_IMPORTED_MODULE_3__.riskyHandAction)(state);
        }
        else {
            if ((0,_aiUtils__WEBPACK_IMPORTED_MODULE_2__.isOneCardFlushOrStraightPossible)(state.board)) {
                if (isTopPair)
                    return (0,_handActions__WEBPACK_IMPORTED_MODULE_3__.weakHandAction)(state);
                else
                    return (0,_handActions__WEBPACK_IMPORTED_MODULE_3__.bluffHandAction)(state);
            }
            if (isTopPair) {
                if (isHandPair)
                    return (0,_handActions__WEBPACK_IMPORTED_MODULE_3__.strongHandAction)(state);
                else
                    return (0,_handActions__WEBPACK_IMPORTED_MODULE_3__.riskyHandAction)(state);
            }
            return (0,_handActions__WEBPACK_IMPORTED_MODULE_3__.weakHandAction)(state);
        }
    }
    else { // river
        if ((0,_aiUtils__WEBPACK_IMPORTED_MODULE_2__.isOneCardFlushOrStraightPossible)(state.board)) {
            if (isTopPair)
                return (0,_handActions__WEBPACK_IMPORTED_MODULE_3__.weakHandAction)(state);
            else
                return (0,_handActions__WEBPACK_IMPORTED_MODULE_3__.bluffHandAction)(state);
        }
        if (isTopPair && isHandPair)
            return (0,_handActions__WEBPACK_IMPORTED_MODULE_3__.strongHandAction)(state);
        else if (isTopPair && kicker.value.code >= _cards__WEBPACK_IMPORTED_MODULE_0__.KingCode)
            return (0,_handActions__WEBPACK_IMPORTED_MODULE_3__.riskyHandAction)(state);
        else if (isTopPair)
            return (0,_handActions__WEBPACK_IMPORTED_MODULE_3__.weakHandAction)(state);
        else
            return (0,_handActions__WEBPACK_IMPORTED_MODULE_3__.bluffHandAction)(state);
    }
}


/***/ }),

/***/ "./src/ai/ifThenElse/preflopActions.ts":
/*!*********************************************!*\
  !*** ./src/ai/ifThenElse/preflopActions.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preflopAction": () => (/* binding */ preflopAction)
/* harmony export */ });
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../cards */ "./src/cards.ts");
/* harmony import */ var _aiUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../aiUtils */ "./src/ai/aiUtils.ts");
/* harmony import */ var _lerp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lerp */ "./src/ai/lerp.ts");
/* harmony import */ var _probabilisticAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../probabilisticAction */ "./src/ai/probabilisticAction.ts");
/* harmony import */ var _handActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handActions */ "./src/ai/ifThenElse/handActions.ts");





function preflopAction(state) {
    const hasPair = state.hand[0].value.code === state.hand[1].value.code;
    if (hasPair)
        return pairPreflopAction(state);
    else
        return nonPairPreflopAction(state);
}
function pairPreflopAction(state) {
    const valueCode = state.hand[0].value.code;
    if (valueCode == _cards__WEBPACK_IMPORTED_MODULE_0__.AceCode)
        return (0,_handActions__WEBPACK_IMPORTED_MODULE_4__.bestHandAction)(state);
    if (valueCode >= 10)
        return highPairAction(state);
    const ninesCheckOrFoldProbability = 0.05;
    const twosCheckOrFoldProbability = 0.8;
    return (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.probabilisticAction)("pre-lowpair", state, (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.uniformFill)({
        checkFoldProbability: (0,_lerp__WEBPACK_IMPORTED_MODULE_2__.lerp)(twosCheckOrFoldProbability, ninesCheckOrFoldProbability, (valueCode - 2) / 9),
        halfPotRaiseProbability: 0,
        allInProbability: 0,
    }));
}
function nonPairPreflopAction(state) {
    const highestCard = (0,_aiUtils__WEBPACK_IMPORTED_MODULE_1__.getHighestCard)(state.hand);
    const lowestCard = (0,_aiUtils__WEBPACK_IMPORTED_MODULE_1__.getLowestCard)(state.hand);
    if (lowestCard.value.code >= _cards__WEBPACK_IMPORTED_MODULE_0__.QueenCode)
        return premiumNonPairAction(state);
    if (lowestCard.value.code >= 10)
        return semiHighNonPairAction(state);
    const delta = highestCard.value.code - lowestCard.value.code;
    if (delta >= 5) {
        if (highestCard.value.code >= _cards__WEBPACK_IMPORTED_MODULE_0__.KingCode)
            return highTrashAction(state);
        else
            return pureTrashAction(state);
    }
    if (highestCard.value.code >= _cards__WEBPACK_IMPORTED_MODULE_0__.JackCode)
        return faceAction(state);
    return pureTrashAction(state);
}
function highPairAction(state) {
    return (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.probabilisticAction)((0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.postfixNameToCall)("pre-highpair", state), state, (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.toCallDependent)(state, {
        zero: {
            checkFoldProbability: 0,
            minRaiseProbability: 0.5,
            halfPotRaiseProbability: 0,
            potRaiseProbability: 0.5,
            allInProbability: 0,
        },
        nonZero: (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.checkCallBased)({
            checkFoldProbability: 0,
            callProbability: (state.pot >= 3 * state.bigBlind) ? 0.5 : 0,
            remainingMinRaiseShare: 0.5,
            remainingHalfPotRaiseShare: 0,
            remainingPotRaiseShare: 0.5,
            remainingAllInShare: 0,
        }),
    }));
}
function premiumNonPairAction(state) {
    return (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.probabilisticAction)((0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.postfixNameToCall)("pre-high-nonpair", state), state, (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.toCallDependent)(state, {
        zero: {
            checkFoldProbability: 0,
            minRaiseProbability: 0.6,
            halfPotRaiseProbability: 0,
            potRaiseProbability: 0.4,
            allInProbability: 0,
        },
        nonZero: (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.checkCallBased)({
            checkFoldProbability: 0,
            callProbability: (state.pot >= 3 * state.bigBlind) ? 0.5 : 0,
            remainingMinRaiseShare: 0.7,
            remainingHalfPotRaiseShare: 0,
            remainingPotRaiseShare: 0.3,
            remainingAllInShare: 0,
        }),
    }));
}
function semiHighNonPairAction(state) {
    return (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.probabilisticAction)((0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.postfixNameToCall)("pre-semihigh-nonpair", state), state, (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.toCallDependent)(state, {
        zero: {
            checkFoldProbability: 0,
            minRaiseProbability: 0.8,
            halfPotRaiseProbability: 0,
            potRaiseProbability: 0.2,
            allInProbability: 0,
        },
        nonZero: (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.checkCallBased)({
            checkFoldProbability: 0,
            callProbability: (state.pot >= 3 * state.bigBlind) ? 0.7 : 0,
            remainingMinRaiseShare: 0.8,
            remainingHalfPotRaiseShare: 0,
            remainingPotRaiseShare: 0.2,
            remainingAllInShare: 0,
        }),
    }));
}
function highTrashAction(state) {
    const lowestCard = (0,_aiUtils__WEBPACK_IMPORTED_MODULE_1__.getLowestCard)(state.hand);
    const twoMultiplier = 0.3;
    const nineMultiplier = 1;
    const multiplier = (0,_lerp__WEBPACK_IMPORTED_MODULE_2__.lerp)(twoMultiplier, nineMultiplier, (lowestCard.value.code - 2) / 7);
    return (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.probabilisticAction)((0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.postfixNameToCall)("pre-hightrash", state), state, (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.toCallDependent)(state, {
        zero: {
            checkFoldProbability: 0.7,
            minRaiseProbability: 0.2,
            halfPotRaiseProbability: 0.1,
            potRaiseProbability: 0,
            allInProbability: 0,
        },
        nonZero: (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.checkCallBased)({
            checkFoldProbability: 0.6,
            callProbability: multiplier * ((state.pot > state.bigBlind && state.pot <= 4 * state.bigBlind) ? 0.2 : 0.05),
            remainingMinRaiseShare: multiplier * (state.pot <= 4 * state.bigBlind ? 0.2 : 0.05),
            remainingHalfPotRaiseShare: 0,
            remainingPotRaiseShare: 0,
            remainingAllInShare: 0,
        }),
    }));
}
function pureTrashAction(state) {
    return (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.probabilisticAction)((0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.postfixNameToCall)("pre-puretrash", state), state, (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.toCallDependent)(state, {
        zero: {
            checkFoldProbability: 0.98,
            minRaiseProbability: 0,
            halfPotRaiseProbability: 0,
            potRaiseProbability: 0,
            allInProbability: 0.02,
        },
        nonZero: (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.checkCallBased)({
            checkFoldProbability: 0.85,
            callProbability: (state.pot <= 3 * state.bigBlind) ? 0.07 : 0,
            remainingMinRaiseShare: (state.pot < 3 * state.bigBlind) ? 0.06 : 0,
            remainingHalfPotRaiseShare: 0,
            remainingPotRaiseShare: (state.pot >= 3 * state.bigBlind) ? 0.13 : 0,
            remainingAllInShare: 0.02,
        }),
    }));
}
function faceAction(state) {
    return (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.probabilisticAction)((0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.postfixNameToCall)("pre-face", state), state, (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.toCallDependent)(state, {
        zero: {
            checkFoldProbability: 0.7,
            minRaiseProbability: 0.2,
            halfPotRaiseProbability: 0.1,
            potRaiseProbability: 0,
            allInProbability: 0,
        },
        nonZero: (0,_probabilisticAction__WEBPACK_IMPORTED_MODULE_3__.checkCallBased)({
            checkFoldProbability: 0.6,
            callProbability: (state.pot > state.bigBlind && state.pot <= 4 * state.bigBlind) ? 0.2 : 0.05,
            remainingMinRaiseShare: (state.pot <= 4 * state.bigBlind) ? 0.2 : 0.05,
            remainingHalfPotRaiseShare: 0,
            remainingPotRaiseShare: 0,
            remainingAllInShare: 0,
        }),
    }));
}


/***/ }),

/***/ "./src/ai/ifThenElse/straightAction.ts":
/*!*********************************************!*\
  !*** ./src/ai/ifThenElse/straightAction.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "straightAction": () => (/* binding */ straightAction)
/* harmony export */ });
/* harmony import */ var _aiUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aiUtils */ "./src/ai/aiUtils.ts");
/* harmony import */ var _handActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handActions */ "./src/ai/ifThenElse/handActions.ts");


function straightAction(state) {
    if ((0,_aiUtils__WEBPACK_IMPORTED_MODULE_0__.isOneCardFlushPossible)(state.board))
        return (0,_handActions__WEBPACK_IMPORTED_MODULE_1__.weakHandAction)(state);
    const myStraight = (0,_aiUtils__WEBPACK_IMPORTED_MODULE_0__.findBestStraight)(state.handPlusBoard);
    const bestGapStraight = (0,_aiUtils__WEBPACK_IMPORTED_MODULE_0__.findBestGapStraight)(state.board);
    const isBetterStraightPossible = bestGapStraight !== null && myStraight.min.value.code < bestGapStraight.firstPiece.min.value.code;
    if (isBetterStraightPossible)
        return (0,_handActions__WEBPACK_IMPORTED_MODULE_1__.riskyHandAction)(state);
    return (0,_handActions__WEBPACK_IMPORTED_MODULE_1__.strongHandAction)(state);
}


/***/ }),

/***/ "./src/ai/ifThenElse/threeAction.ts":
/*!******************************************!*\
  !*** ./src/ai/ifThenElse/threeAction.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "threeAction": () => (/* binding */ threeAction)
/* harmony export */ });
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../cards */ "./src/cards.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state */ "./src/state.ts");
/* harmony import */ var _aiUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../aiUtils */ "./src/ai/aiUtils.ts");
/* harmony import */ var _handActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handActions */ "./src/ai/ifThenElse/handActions.ts");
/* harmony import */ var _highCardAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./highCardAction */ "./src/ai/ifThenElse/highCardAction.ts");





function threeAction(state) {
    const threes = (0,_aiUtils__WEBPACK_IMPORTED_MODULE_2__.getTriplets)(state.board);
    if (threes.length !== 0) {
        const kicker = (0,_aiUtils__WEBPACK_IMPORTED_MODULE_2__.getHighestCard)(state.hand);
        if (kicker.value.code === _cards__WEBPACK_IMPORTED_MODULE_0__.AceCode)
            return (0,_handActions__WEBPACK_IMPORTED_MODULE_3__.bestHandAction)(state);
        else if (kicker.value.code === _cards__WEBPACK_IMPORTED_MODULE_0__.KingCode)
            return (0,_handActions__WEBPACK_IMPORTED_MODULE_3__.strongHandAction)(state);
        else
            return (0,_highCardAction__WEBPACK_IMPORTED_MODULE_4__.highCardAction)(state);
    }
    if ((0,_aiUtils__WEBPACK_IMPORTED_MODULE_2__.isOneCardFlushOrStraightPossible)(state.board))
        return (0,_handActions__WEBPACK_IMPORTED_MODULE_3__.riskyHandAction)(state);
    const boardPair = (0,_aiUtils__WEBPACK_IMPORTED_MODULE_2__.getPairs)(state.board)[0];
    const isSet = !boardPair;
    if (isSet) {
        console.log("three state", {
            isSet,
        });
        return (0,_handActions__WEBPACK_IMPORTED_MODULE_3__.strongHandAction)(state);
    }
    const kicker = boardPair[0].value.code === state.hand[0].value.code
        ? state.hand[1]
        : state.hand[0];
    console.log("three state", {
        isSet,
        kicker,
    });
    if (kicker.value.code >= _cards__WEBPACK_IMPORTED_MODULE_0__.KingCode)
        return (0,_handActions__WEBPACK_IMPORTED_MODULE_3__.strongHandAction)(state);
    if (state.phase.code <= _state__WEBPACK_IMPORTED_MODULE_1__.RiverPhase.code) {
        if ((0,_aiUtils__WEBPACK_IMPORTED_MODULE_2__.hasFlushDrawOrOpenEndedStraight)(state.handPlusBoard))
            return (0,_handActions__WEBPACK_IMPORTED_MODULE_3__.strongHandAction)(state);
    }
    return (0,_handActions__WEBPACK_IMPORTED_MODULE_3__.riskyHandAction)(state);
}


/***/ }),

/***/ "./src/ai/ifThenElse/twoPairAction.ts":
/*!********************************************!*\
  !*** ./src/ai/ifThenElse/twoPairAction.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "twoPairAction": () => (/* binding */ twoPairAction)
/* harmony export */ });
/* harmony import */ var _aiUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../aiUtils */ "./src/ai/aiUtils.ts");
/* harmony import */ var _handActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handActions */ "./src/ai/ifThenElse/handActions.ts");
/* harmony import */ var _highCardAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./highCardAction */ "./src/ai/ifThenElse/highCardAction.ts");
/* harmony import */ var _pairAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pairAction */ "./src/ai/ifThenElse/pairAction.ts");




function twoPairAction(state) {
    const boardPairs = (0,_aiUtils__WEBPACK_IMPORTED_MODULE_0__.getPairs)(state.board);
    if (boardPairs.length !== 0) {
        if (boardPairs.length == 1)
            return (0,_pairAction__WEBPACK_IMPORTED_MODULE_3__.pairActionIgnoringBoardPair)(state);
        else
            return (0,_highCardAction__WEBPACK_IMPORTED_MODULE_2__.highCardAction)(state);
    }
    if ((0,_aiUtils__WEBPACK_IMPORTED_MODULE_0__.isOneCardFlushOrStraightPossible)(state.board))
        return (0,_handActions__WEBPACK_IMPORTED_MODULE_1__.weakHandAction)(state);
    return (0,_handActions__WEBPACK_IMPORTED_MODULE_1__.strongHandAction)(state);
}


/***/ }),

/***/ "./src/ai/lerp.ts":
/*!************************!*\
  !*** ./src/ai/lerp.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lerp": () => (/* binding */ lerp)
/* harmony export */ });
/**
 * Linear interpolation, works like https://docs.unity3d.com/ScriptReference/Mathf.Lerp.html
 */
function lerp(min, max, t) {
    return min + (max - min) * t;
}


/***/ }),

/***/ "./src/ai/probabilisticAction.ts":
/*!***************************************!*\
  !*** ./src/ai/probabilisticAction.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProbabilisticActionArgsKeys": () => (/* binding */ ProbabilisticActionArgsKeys),
/* harmony export */   "checkCallBased": () => (/* binding */ checkCallBased),
/* harmony export */   "postfixNameToCall": () => (/* binding */ postfixNameToCall),
/* harmony export */   "probabilisticAction": () => (/* binding */ probabilisticAction),
/* harmony export */   "toCallDependent": () => (/* binding */ toCallDependent),
/* harmony export */   "uniformFill": () => (/* binding */ uniformFill),
/* harmony export */   "zeroFill": () => (/* binding */ zeroFill)
/* harmony export */ });
const ProbabilisticActionArgs = {
    checkFoldProbability: 0,
    callProbability: 0,
    minRaiseProbability: 0,
    halfPotRaiseProbability: 0,
    // tqPotRaiseProbability: 0,
    potRaiseProbability: 0,
    // overbetProbability: 0,
    allInProbability: 0,
};
const ProbabilisticActionArgsKeys = Object.keys(ProbabilisticActionArgs).map(key => key);
const probabilityToAction = {
    checkFoldProbability: { type: "check_or_fold" },
    callProbability: { type: "call" },
    minRaiseProbability: { type: "raise", raiseAmount: "min" },
    halfPotRaiseProbability: { type: "raise", raiseAmount: "1/2_pot" },
    // tqPotRaiseProbability: { type: "raise", raiseAmount: "3/4_pot" },
    potRaiseProbability: { type: "raise", raiseAmount: "pot" },
    // overbetProbability: { type: "raise", raiseAmount: "overbet" },
    allInProbability: { type: "raise", raiseAmount: "all_in" },
};
/**
 * Returs an action chosen randomly according to the probabilities you pass in `args`.
 *
 * Note that if to call is zero then the call probability is forced to zero
 * and that the probabilities are always normalized such that they sum to 1.
 * `args` is not modified in this process.
 *
 * This function logs all info regarding the choice, including a `name` you provide
 * that is very convenient when debugging.
 */
function probabilisticAction(name, state, args) {
    const copy = Object.assign({}, args);
    if (state.toCall === 0)
        copy.callProbability = 0;
    const normalized = normalize(copy);
    let random = Math.random();
    for (const key of ProbabilisticActionArgsKeys) {
        const probability = normalized[key];
        if (random < probability) {
            console.log(`"probabilistic action (${name})`, {
                input: args,
                normalized,
                random,
                chosen: probabilityToAction[key],
            });
            return probabilityToAction[key];
        }
        random -= probability;
    }
    return { type: "check_or_fold" };
}
/**
 * Returns a normalized version of `args` such that the probabilities sum to 1
 */
function normalize(args) {
    let sum = 0;
    for (const key of ProbabilisticActionArgsKeys)
        sum += args[key];
    for (const key of ProbabilisticActionArgsKeys)
        args[key] /= sum;
    return args;
}
function toCallDependent(state, args) {
    if (state.toCall > 0)
        return args.nonZero;
    return Object.assign(Object.assign({}, args.zero), { callProbability: 0 });
}
/**
 * Appends "-call" if `state.toCall > 0` and "-zero" otherwise
 */
function postfixNameToCall(name, state) {
    if (state.toCall > 0)
        return name + "-call";
    else
        return name + "-zero";
}
/**
 * This let's you specify directly only check/fold and call probabilities, while allowing you
 * to specify the raise probabilities proportional to whatever is left.
 *
 * This is only useful if you don't know a priori the probability of either check/fold of call,
 * because for instance they are the result of a computation
 * (imagine that you want to fold with a probability based on the amount to call).
 *
 * @example
 * // imagine that you want to code a probabilistic bluff raise
 * // an that state.toCall === 75 and state.prevPhasePot === 100
 * // the following will make you fold 75% of the time
 * // pot raise 25% * 0.8 = 20% of the time
 * // go all in 25% * 0.2 = 5% of the time
 * checkCallBased({
 *     checkFoldProbability: state.toCall / state.prevPhasePot,
 *     remainingPotRaiseShare: 0.8,
 *     remainingAllInShare: 0.2,
 * })
 */
function checkCallBased(args) {
    const sum = args.callProbability + args.checkFoldProbability;
    const remaining = Math.max(1 - sum, 0);
    return {
        checkFoldProbability: args.checkFoldProbability,
        callProbability: args.callProbability,
        minRaiseProbability: remaining * args.remainingMinRaiseShare,
        halfPotRaiseProbability: remaining * args.remainingHalfPotRaiseShare,
        potRaiseProbability: remaining * args.remainingPotRaiseShare,
        allInProbability: remaining * args.remainingAllInShare,
    };
}
/**
 * Returns a copy of `args` where undefined probabilities are set to 0
 */
function zeroFill(args) {
    for (const key of ProbabilisticActionArgsKeys)
        if (args[key] == undefined)
            args[key] = 0;
    return args;
}
/**
 * Returns a copy of `args` where undefined probabilities get an equal share of the remaining probability
 */
function uniformFill(args) {
    const undefinedCount = countUndefinedActions(args);
    const definedSum = sumDefinedActions(args);
    const remainingValue = 1 - definedSum;
    let fillValue;
    if (remainingValue <= 0)
        fillValue = 0;
    else
        fillValue = remainingValue / undefinedCount;
    for (const key of ProbabilisticActionArgsKeys)
        if (args[key] == undefined)
            args[key] = fillValue;
    return args;
}
function countUndefinedActions(args) {
    let undefinedCount = 0;
    for (const key of ProbabilisticActionArgsKeys)
        if (args[key] == undefined)
            undefinedCount++;
    return undefinedCount;
}
function sumDefinedActions(args) {
    let sum = 0;
    for (const key of ProbabilisticActionArgsKeys) {
        const val = args[key];
        if (val != undefined)
            sum += val;
    }
    return sum;
}


/***/ }),

/***/ "./src/cards.ts":
/*!**********************!*\
  !*** ./src/cards.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AceCode": () => (/* binding */ AceCode),
/* harmony export */   "InvalidCardCode": () => (/* binding */ InvalidCardCode),
/* harmony export */   "JackCode": () => (/* binding */ JackCode),
/* harmony export */   "KingCode": () => (/* binding */ KingCode),
/* harmony export */   "LowestStraightAceCode": () => (/* binding */ LowestStraightAceCode),
/* harmony export */   "QueenCode": () => (/* binding */ QueenCode),
/* harmony export */   "cardValueCodeFromName": () => (/* binding */ cardValueCodeFromName),
/* harmony export */   "isCardValueCodeValid": () => (/* binding */ isCardValueCodeValid)
/* harmony export */ });
const AceCode = 14;
const KingCode = 13;
const QueenCode = 12;
const JackCode = 11;
const LowestStraightAceCode = 1;
const InvalidCardCode = 0;
function cardValueCodeFromName(name) {
    const parsed = parseInt(name);
    if (!isNaN(parsed))
        return parsed;
    switch (name) {
        case "A":
            return AceCode;
        case "K":
            return KingCode;
        case "Q":
            return QueenCode;
        case "J":
            return JackCode;
        default:
            return InvalidCardCode;
    }
}
function isCardValueCodeValid(code) {
    return code > InvalidCardCode && code <= AceCode;
}


/***/ }),

/***/ "./src/rank.ts":
/*!*********************!*\
  !*** ./src/rank.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlushRank": () => (/* binding */ FlushRank),
/* harmony export */   "FourOfKindRank": () => (/* binding */ FourOfKindRank),
/* harmony export */   "FullHouseRank": () => (/* binding */ FullHouseRank),
/* harmony export */   "HighCardRank": () => (/* binding */ HighCardRank),
/* harmony export */   "PairRank": () => (/* binding */ PairRank),
/* harmony export */   "RoyalFlushRank": () => (/* binding */ RoyalFlushRank),
/* harmony export */   "StraightFlushRank": () => (/* binding */ StraightFlushRank),
/* harmony export */   "StraightRank": () => (/* binding */ StraightRank),
/* harmony export */   "ThreeOfKindRank": () => (/* binding */ ThreeOfKindRank),
/* harmony export */   "TwoPairRank": () => (/* binding */ TwoPairRank),
/* harmony export */   "parseHandRank": () => (/* binding */ parseHandRank)
/* harmony export */ });
const HighCardRank = {
    name: "high",
    code: 0,
};
const PairRank = {
    name: "pair",
    code: 1,
};
const TwoPairRank = {
    name: "two_pair",
    code: 2,
};
const ThreeOfKindRank = {
    name: "three",
    code: 3,
};
const StraightRank = {
    name: "straight",
    code: 4,
};
const FlushRank = {
    name: "flush",
    code: 5,
};
const FullHouseRank = {
    name: "full",
    code: 6,
};
const FourOfKindRank = {
    name: "four",
    code: 7,
};
const StraightFlushRank = {
    name: "straight_flush",
    code: 8,
};
const RoyalFlushRank = {
    name: "royal_flush",
    code: 9,
};
function parseHandRank(rawRank) {
    const lowercased = rawRank.toLowerCase();
    if (lowercased.includes("high"))
        return HighCardRank;
    else if (lowercased.includes("two"))
        return TwoPairRank;
    else if (lowercased.includes("pair"))
        return PairRank;
    else if (lowercased.includes("three"))
        return ThreeOfKindRank;
    else if (lowercased.includes("flush")) {
        if (lowercased.includes("strai"))
            return StraightFlushRank;
        else if (lowercased.includes("roy"))
            return RoyalFlushRank;
        else
            return FlushRank;
    }
    else if (lowercased.includes("strai"))
        return StraightRank;
    else if (lowercased.includes("four"))
        return FourOfKindRank;
    else if (lowercased.includes("full"))
        return FullHouseRank;
    return HighCardRank;
}


/***/ }),

/***/ "./src/state.ts":
/*!**********************!*\
  !*** ./src/state.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlopPhase": () => (/* binding */ FlopPhase),
/* harmony export */   "PreflopPhase": () => (/* binding */ PreflopPhase),
/* harmony export */   "RiverPhase": () => (/* binding */ RiverPhase),
/* harmony export */   "TurnPhase": () => (/* binding */ TurnPhase),
/* harmony export */   "getPhaseFromBoardLength": () => (/* binding */ getPhaseFromBoardLength)
/* harmony export */ });
const PreflopPhase = {
    name: "preflop",
    code: 0,
};
const FlopPhase = {
    name: "flop",
    code: 1,
};
const TurnPhase = {
    name: "turn",
    code: 2,
};
const RiverPhase = {
    name: "river",
    code: 3,
};
function getPhaseFromBoardLength(length) {
    switch (length) {
        case 0:
        default:
            return PreflopPhase;
        case 3:
            return FlopPhase;
        case 4:
            return TurnPhase;
        case 5:
            return RiverPhase;
    }
}


/***/ }),

/***/ "./src/ui.ts":
/*!*******************!*\
  !*** ./src/ui.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allInRaise": () => (/* binding */ allInRaise),
/* harmony export */   "call": () => (/* binding */ call),
/* harmony export */   "canCheck": () => (/* binding */ canCheck),
/* harmony export */   "check": () => (/* binding */ check),
/* harmony export */   "fold": () => (/* binding */ fold),
/* harmony export */   "getBigBlindValue": () => (/* binding */ getBigBlindValue),
/* harmony export */   "getBoardCards": () => (/* binding */ getBoardCards),
/* harmony export */   "getHandCards": () => (/* binding */ getHandCards),
/* harmony export */   "getHandRank": () => (/* binding */ getHandRank),
/* harmony export */   "getPhase": () => (/* binding */ getPhase),
/* harmony export */   "getPrevPhasePot": () => (/* binding */ getPrevPhasePot),
/* harmony export */   "getStack": () => (/* binding */ getStack),
/* harmony export */   "getState": () => (/* binding */ getState),
/* harmony export */   "getToCallValue": () => (/* binding */ getToCallValue),
/* harmony export */   "getTotalPot": () => (/* binding */ getTotalPot),
/* harmony export */   "halfPotRaise": () => (/* binding */ halfPotRaise),
/* harmony export */   "isMyTurn": () => (/* binding */ isMyTurn),
/* harmony export */   "minRaise": () => (/* binding */ minRaise),
/* harmony export */   "parseCard": () => (/* binding */ parseCard),
/* harmony export */   "potRaise": () => (/* binding */ potRaise),
/* harmony export */   "showHandIfPossible": () => (/* binding */ showHandIfPossible),
/* harmony export */   "tqPotRaise": () => (/* binding */ tqPotRaise)
/* harmony export */ });
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ "./src/cards.ts");
/* harmony import */ var _rank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rank */ "./src/rank.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/state.ts");



function isMyTurn() {
    return document.querySelector(".action-signal") !== null;
}
function parseCard(element) {
    var _a, _b;
    if (!element)
        throw new Error("can't parse card from null element");
    const rawValue = (_a = element.querySelector(".value")) === null || _a === void 0 ? void 0 : _a.textContent;
    const rawSuit = (_b = element.querySelector(".suit")) === null || _b === void 0 ? void 0 : _b.textContent;
    if (!rawValue || !rawSuit)
        throw new Error("can't find value or suit in card element");
    const valueName = rawValue;
    const valueCode = (0,_cards__WEBPACK_IMPORTED_MODULE_0__.cardValueCodeFromName)(valueName);
    if (!(0,_cards__WEBPACK_IMPORTED_MODULE_0__.isCardValueCodeValid)(valueCode))
        throw new Error("invalid card value code: " + rawValue);
    return {
        value: {
            name: valueName,
            code: valueCode,
        },
        suit: rawSuit,
    };
}
function getHandCards() {
    const cards = document.querySelectorAll(".you-player .card");
    try {
        const firstCard = parseCard(cards[0]);
        const secondCard = parseCard(cards[1]);
        return [firstCard, secondCard];
    }
    catch (err) {
        throw new Error("error parsing hand cards: " + err);
    }
}
function getBoardCards() {
    const cards = [...document.querySelectorAll(".table-cards .card")];
    try {
        return cards.map(parseCard);
    }
    catch (err) {
        throw new Error("error parsing board cards: " + err);
    }
}
function getBigBlindValue() {
    var _a;
    return parseInt((_a = document.querySelectorAll(".blind-value .chips-value")[1].textContent) !== null && _a !== void 0 ? _a : "");
}
function getToCallValue() {
    var _a;
    const callText = (_a = document.querySelector("button.call")) === null || _a === void 0 ? void 0 : _a.textContent;
    if (!callText)
        return 0;
    const lowercasedCallText = callText.toLowerCase();
    if (!lowercasedCallText.includes("call"))
        return 0;
    if (!lowercasedCallText.includes(" "))
        return 0;
    return parseInt(lowercasedCallText.split(" ")[1]);
}
function getHandRank() {
    var _a, _b;
    const rawRank = (_b = (_a = document.querySelector(".player-hand-message")) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : "";
    return (0,_rank__WEBPACK_IMPORTED_MODULE_1__.parseHandRank)(rawRank);
}
function getPhase() {
    const boardCardsElements = document.querySelectorAll(".table-cards .card");
    return (0,_state__WEBPACK_IMPORTED_MODULE_2__.getPhaseFromBoardLength)(boardCardsElements.length);
}
function getStack() {
    var _a;
    const stackText = (_a = document.querySelector(".table-player.you-player .table-player-stack")) === null || _a === void 0 ? void 0 : _a.textContent;
    return parseInt(stackText !== null && stackText !== void 0 ? stackText : "0");
}
function getTotalPot() {
    var _a;
    const potText = (_a = document.querySelector(".table-pot-size .add-on .chips-value")) === null || _a === void 0 ? void 0 : _a.textContent;
    return parseInt(potText !== null && potText !== void 0 ? potText : "0");
}
function getPrevPhasePot() {
    var _a;
    const prevPotText = (_a = document.querySelector(".table-pot-size .main-value .chips-value")) === null || _a === void 0 ? void 0 : _a.textContent;
    return parseInt(prevPotText !== null && prevPotText !== void 0 ? prevPotText : "0");
}
function getState() {
    const hand = getHandCards();
    const board = getBoardCards();
    return {
        phase: getPhase(),
        handRank: getHandRank(),
        hand,
        board,
        handPlusBoard: [...hand, ...board],
        bigBlind: getBigBlindValue(),
        stack: getStack(),
        pot: getTotalPot(),
        prevPhasePot: getPrevPhasePot(),
        toCall: getToCallValue(),
    };
}
function canCheck() {
    var _a;
    return !((_a = document.querySelector("button.check")) === null || _a === void 0 ? void 0 : _a.disabled);
}
function check() {
    var _a;
    (_a = document.querySelector("button.check")) === null || _a === void 0 ? void 0 : _a.click();
}
function fold() {
    var _a;
    (_a = document.querySelector("button.fold")) === null || _a === void 0 ? void 0 : _a.click();
}
function call() {
    var _a;
    (_a = document.querySelector("button.call")) === null || _a === void 0 ? void 0 : _a.click();
}
function withRaiseMenu(action) {
    const raiseButton = document.querySelector("button.raise");
    if (raiseButton.disabled) {
        call();
        action();
        return;
    }
    raiseButton.click();
    setTimeout(() => {
        var _a;
        action();
        (_a = document.querySelector('.raise-controller-form input[type="submit"]')) === null || _a === void 0 ? void 0 : _a.click();
    }, 100);
}
function getBetButtons() {
    const buttons = document.querySelectorAll(".default-bet-buttons button");
    console.log("bet buttons", buttons);
    return buttons;
}
function minRaise(callback) {
    withRaiseMenu(() => {
        var _a;
        (_a = getBetButtons()[0]) === null || _a === void 0 ? void 0 : _a.click();
        callback === null || callback === void 0 ? void 0 : callback();
    });
}
function halfPotRaise(callback) {
    withRaiseMenu(() => {
        var _a;
        (_a = getBetButtons()[1]) === null || _a === void 0 ? void 0 : _a.click();
        callback === null || callback === void 0 ? void 0 : callback();
    });
}
function tqPotRaise(callback) {
    withRaiseMenu(() => {
        var _a;
        (_a = getBetButtons()[2]) === null || _a === void 0 ? void 0 : _a.click();
        callback === null || callback === void 0 ? void 0 : callback();
    });
}
function potRaise(callback) {
    withRaiseMenu(() => {
        var _a;
        (_a = getBetButtons()[3]) === null || _a === void 0 ? void 0 : _a.click();
        callback === null || callback === void 0 ? void 0 : callback();
    });
}
function allInRaise(callback) {
    withRaiseMenu(() => {
        var _a;
        (_a = getBetButtons()[4]) === null || _a === void 0 ? void 0 : _a.click();
        callback === null || callback === void 0 ? void 0 : callback();
    });
}
function showHandIfPossible() {
    var _a;
    (_a = document.querySelector('button.show-your-hand')) === null || _a === void 0 ? void 0 : _a.click();
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ai_ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ai/ai */ "./src/ai/ai.ts");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.ts");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./src/action.ts");



const timeoutMs = 500;
let botLoopTimeout;
console.log(`"pokerbot v${chrome.runtime.getManifest().version}"`);
function startBotLoop() {
    stopBotLoop();
    console.log("starting bot");
    console.log("big blind: " + (0,_ui__WEBPACK_IMPORTED_MODULE_1__.getBigBlindValue)());
    function botLoop() {
        if ((0,_ui__WEBPACK_IMPORTED_MODULE_1__.isMyTurn)()) {
            console.log("bot turn");
            const state = (0,_ui__WEBPACK_IMPORTED_MODULE_1__.getState)();
            console.log("state: ", state);
            let action;
            try {
                action = (0,_ai_ai__WEBPACK_IMPORTED_MODULE_0__.getAction)(state);
                console.log("bot action:", action);
            }
            catch (err) {
                action = undefined;
                console.error("bot error:", err);
            }
            const sanitizedAction = (0,_action__WEBPACK_IMPORTED_MODULE_2__.sanitizeAction)(action, state);
            console.log("sanitized bot action:", sanitizedAction);
            (0,_action__WEBPACK_IMPORTED_MODULE_2__.performAction)(sanitizedAction, () => setTimeout(botLoop, timeoutMs));
        }
        else {
            botLoopTimeout = setTimeout(botLoop, timeoutMs);
        }
        (0,_ui__WEBPACK_IMPORTED_MODULE_1__.showHandIfPossible)();
    }
    botLoop();
}
function stopBotLoop() {
    clearTimeout(botLoopTimeout);
    botLoopTimeout = undefined;
}
chrome.runtime.onMessage.addListener((message, sender, callback) => {
    switch (message) {
        case "start_bot":
            startBotLoop();
            break;
        case "kill_bot":
            stopBotLoop();
            break;
        case "get_bot_status":
            let status = botLoopTimeout === undefined
                ? "off"
                : "playing";
            callback(status);
            break;
    }
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map