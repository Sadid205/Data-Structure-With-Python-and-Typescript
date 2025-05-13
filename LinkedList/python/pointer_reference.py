
def pointer(obj):
    obj["value"] = None

a = {
    "value":30,
}

pointer(a)

print(a)
