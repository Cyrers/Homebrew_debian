def read_file(file_path):
    with open(file_path, 'r') as file:
        return [line.split()[0].split("/")[0] for line in file.readlines()]


def compare_arrays(array1, array2):
    return list(set(array1) - set(array2)), list(set(array2) - set(array1))


# Read the files
list1 = read_file('/home/student/Bureau/Liste.txt')
list2 = read_file('/home/student/Bureau/ListeDebian.txt')

# Compare the arrays
unique_to_list1_compared_to_list_2, unique_to_list2_compared_to_list_1 = compare_arrays(list1, list2)

with open('outputUniqueListe.txt', 'w') as file1:
    file1.write("Elements unique to Liste.txt compare a ListeDebian.txt:\n")
    for element in unique_to_list1_compared_to_list_2:
        file1.write(element + '\n')
    file1.close()
with open('outputUniqueDebian.txt', 'w') as file2:
    file2.write("Elements unique to ListeDebian.txt compare a Liste.txt:\n")
    for element in unique_to_list2_compared_to_list_1:
        file2.write(element + '\n')
    file2.close()

unique_to_list1_compared_to_list_2 = [element + ', Tsurugi' for element in unique_to_list1_compared_to_list_2]
unique_to_list2_compared_to_list_1 = [element + ', Debian' for element in unique_to_list2_compared_to_list_1]

with open('ComparatifTsurugiDebian', 'w') as file3:
    file3.write("Liste ordonnée")
    unique_to_list1_compared_to_list_2.append('\n')
    a = unique_to_list1_compared_to_list_2 + unique_to_list2_compared_to_list_1
    a.sort()
    for element in a:
        file3.write(element+'\n')
    file3.close()
