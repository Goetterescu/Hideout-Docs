# event commands
        
    
        if a[0] == "-fish":
            if len(a) > 1: # Check if the user tried to use this command like "-rip"
                self.__sendChat_delayed("You don't need any parameters for this command...")
    
            else:
                pos = self.sm.getPosition(source) # Get position
                if pos.x <= 893 and pos.x >= 841: 
                    check1 = True
                else:
                    check1 = False
                if pos.z <= 1570 and pos.z >= 1547: 
                    check2 = True
                else:
                    check2 = False
                # Now we got the two checks. Let's check those booleans and react correctly    
        
                if check1 == True and check2 == True:
                    ranfish = random.randint(1,300) # Get one from 300 possible results
    
                    # Here comes the main decision
                    print(ranfish) # Debug
                    if ranfish <= 30: loot = "some junk" # Short-hand-if because we are cool
                    #common
                    if ranfish >= 31 and ranfish <= 70: loot = "a Common Carp"
                    #well-known
                    if ranfish >= 71 and ranfish <= 100: loot = "a Common Bass"
                    if ranfish >= 101 and ranfish <= 130: loot = "a Common Trout"
                    #known
                    if ranfish >= 131 and ranfish <= 150: loot = "a Walleye"
                    if ranfish >= 151 and ranfish <= 170: loot = "a Lake Trout"
                    #fancy
                    if ranfish >= 171 and ranfish <= 180: loot = "a Northern Pike"
                    if ranfish >= 181 and ranfish <= 190: loot = "a Channel Catfish"
                    if ranfish >= 191 and ranfish <= 200: loot = "a White Bass"
                    if ranfish >= 201 and ranfish <= 210: loot = "a Northern Largemouth Bass"
                    if ranfish >= 211 and ranfish <= 220: loot = "an Angelfish (this is weird...)"
                    if ranfish >= 221 and ranfish <= 230: loot = "an old medal"
                    if ranfish >= 231 and ranfish <= 240: loot = "the Playboy Magazine from December 1953 (the one featuring Marilyn Monroe)"
                    if ranfish >= 241 and ranfish <= 250: loot = "a Guppy Fish (congrats on catching something this small)"
                    #rare
                    if ranfish >= 251 and ranfish <= 255: loot = "a Chinook Salmon"
                    if ranfish >= 256 and ranfish <= 260: loot = "a Rainbow Trout"
                    if ranfish >= 261 and ranfish <= 265: loot = "a Quest Scroll!!"
                    if ranfish >= 266 and ranfish <= 270: loot = "the blueprint for ... (it is blurry af)"
                    if ranfish >= 271 and ranfish <= 275: loot = "the old BMW engine Gigi lost a while ago!!"
                    #very-rare
                    if ranfish >= 276 and ranfish <= 278: loot = "a Moray Eel"
                    if ranfish >= 279 and ranfish <= 281: loot = "a glowing scroll (might be magical!)"
                    if ranfish >= 282 and ranfish <= 284: loot = "an Axolotl (is this even legal to fish?)"
                    if ranfish >= 285 and ranfish <= 287: loot = "a wallet with 5k Gigis"
                    #unknown
                    if ranfish >= 288 and ranfish <= 289: loot = "a Beholdrin"
                    if ranfish >= 290 and ranfish <= 291: loot = "an unknown Fish"
                    if ranfish >= 292 and ranfish <= 293: loot = "a weird looking bottle with something inside"
                    #unique
                    if ranfish == 294: loot = "a Diamond Darter (this is super rare)"
                    if ranfish == 295: loot = "an Alabama Sturgeon (this is super rare)"
                    if ranfish == 296: loot = "a Damba Mipentina (this is super rare)"
                    if ranfish == 297: loot = "Chinese Paddlefish (this is super rare)"
                    #cursed
                    if ranfish >= 298 and ranfish <= 299: loot = "a glowing stick"
                    if ranfish == 300: loot = "an old candle (you just fucked up!)"
                    self.__sendChat_delayed(self.sm.getUsernameColoured(source) + " reeled in " + str(loot) + "!")

# a is the chat array. a[0] inital and a[1] the first parameter
# self.__sendChat_delayed("%s reeled in a quest scroll!!!" % self.sm.getUsernameColoured(source))
# [username] reeled [first word of loot] in:#bot during:[date of event]     this can be used to search the chat log after the event
                if check1 == False:
                    self.__sendChat_delayed("Wrong position on X-axis!")
                if check2 == False:
                    self.__sendChat_delayed("Wrong position on Z-axis!")

        return
            
            
        # end of event commands
