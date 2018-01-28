while True:
    s = input("Enter something : ")
    if s == "quit":
        print("game over")
        break
    if len(s) < 3:
        print("Too small")
        continue
    print("input is of sufficient length")
