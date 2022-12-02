import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main.js";
import ChainInfo from "./pages/ChainInfo.js";
import NotFound from "./pages/NotFound.js";
import FakeBayc from "./pages/FakeBayc.js";
import FakeBaycTokenInfo from "./pages/FakeBaycTokenInfo.js";
import FakeNefturians from "./pages/FakeNefturians.js";
import FakeNefturiansUserInfo from "./pages/FakeNefturiansUserInfo.js";
import FakeMeebits from "./pages/FakeMeebits.js";
import WrongNetwork from "./pages/WrongNetwork.js";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/chainInfo" element={<ChainInfo />} />
            <Route path="/fakeBayc" element={<FakeBayc />} />
            <Route path="/fakeBayc/:tokenId" element={<FakeBaycTokenInfo />} />
            <Route path="/fakeNefturians" element={<FakeNefturians />} />
            <Route path="/fakeNefturians/:userAddress" element={<FakeNefturiansUserInfo />} />
            <Route path="/fakeMeebits" element={<FakeMeebits />} />
            <Route path="/wrongNetwork" element={<WrongNetwork />} />
            <Route path="*" element={<NotFound />} />
        </Routes>

    )
}

export default AppRoutes;